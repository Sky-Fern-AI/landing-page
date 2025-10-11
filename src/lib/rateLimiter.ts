// Client-side rate limiting and protection utilities

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lastAttempt: number;
  blockedUntil?: number;
}

class ClientRateLimiter {
  private storage: Map<string, RateLimitEntry> = new Map();
  private maxAttempts: number;
  private windowMs: number;
  private blockDurationMs: number;

  constructor(
    maxAttempts: number = 3,
    windowMs: number = 60000, // 1 minute
    blockDurationMs: number = 300000 // 5 minutes
  ) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.blockDurationMs = blockDurationMs;
  }

  private getKey(action: string): string {
    // Use a combination of action and browser fingerprint
    const userAgent = navigator.userAgent;
    const timestamp = Math.floor(Date.now() / this.windowMs);
    return `${action}-${userAgent.slice(0, 50)}-${timestamp}`;
  }

  canAttempt(action: string): { allowed: boolean; retryAfter?: number; message?: string } {
    const key = this.getKey(action);
    const now = Date.now();
    const entry = this.storage.get(key);

    // Clean up old entries
    this.cleanup();

    if (!entry) {
      // First attempt
      this.storage.set(key, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
      });
      return { allowed: true };
    }

    // Check if currently blocked
    if (entry.blockedUntil && entry.blockedUntil > now) {
      const retryAfter = Math.ceil((entry.blockedUntil - now) / 1000);
      return {
        allowed: false,
        retryAfter,
        message: `Too many attempts. Please wait ${Math.ceil(retryAfter / 60)} minutes before trying again.`,
      };
    }

    // Check if window has expired
    if (now - entry.firstAttempt > this.windowMs) {
      // Reset counter
      this.storage.set(key, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
      });
      return { allowed: true };
    }

    // Increment attempt count
    entry.count += 1;
    entry.lastAttempt = now;

    if (entry.count > this.maxAttempts) {
      // Block user
      entry.blockedUntil = now + this.blockDurationMs;
      this.storage.set(key, entry);
      const retryAfter = Math.ceil(this.blockDurationMs / 1000);
      return {
        allowed: false,
        retryAfter,
        message: `Too many attempts. Please wait ${Math.ceil(retryAfter / 60)} minutes before trying again.`,
      };
    }

    this.storage.set(key, entry);
    return { allowed: true };
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.storage.entries()) {
      // Remove entries older than 24 hours
      if (now - entry.lastAttempt > 86400000) {
        this.storage.delete(key);
      }
    }
  }
}

// Input sanitization utilities
export const sanitizeInput = {
  name: (input: string): string => {
    return input
      .trim()
      .replace(/[<>{}()[\]\\|`~!@#$%^&*+=]/g, '') // Remove special characters
      .substring(0, 100); // Limit length
  },

  email: (input: string): string => {
    return input
      .trim()
      .toLowerCase()
      .substring(0, 255); // Limit length
  },

  company: (input: string): string => {
    return input
      .trim()
      .replace(/[<>{}()[\]\\|`~!@#$%^&*+=]/g, '') // Remove special characters
      .substring(0, 100); // Limit length
  },

  role: (input: string): string => {
    return input
      .trim()
      .replace(/[<>{}()[\]\\|`~!@#$%^&*+=]/g, '') // Remove special characters
      .substring(0, 100); // Limit length
  },
};

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

// Form validation
export const validateFormData = (data: {
  name: string;
  email: string;
  company: string;
  role: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Sanitize inputs
  const sanitized = {
    name: sanitizeInput.name(data.name),
    email: sanitizeInput.email(data.email),
    company: sanitizeInput.company(data.company),
    role: sanitizeInput.role(data.role),
  };

  // Validate lengths
  if (sanitized.name.length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (sanitized.email.length < 5) {
    errors.push('Email must be at least 5 characters long');
  }

  if (!isValidEmail(sanitized.email)) {
    errors.push('Please enter a valid email address');
  }

  if (sanitized.company.length < 2) {
    errors.push('Company name must be at least 2 characters long');
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /(.)\1{10,}/, // Repeated characters
    /^[^a-zA-Z]*$/, // No letters
    /(script|javascript|vbscript|onload|onerror)/i, // Script injection
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(sanitized.name) || pattern.test(sanitized.company)) {
      errors.push('Invalid characters detected');
      break;
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Exponential backoff utility
export class ExponentialBackoff {
  private attempts: number = 0;
  private baseDelay: number = 1000; // 1 second
  private maxDelay: number = 30000; // 30 seconds
  private maxAttempts: number = 5;

  reset(): void {
    this.attempts = 0;
  }

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    while (this.attempts < this.maxAttempts) {
      try {
        const result = await fn();
        this.reset();
        return result;
      } catch (error) {
        this.attempts++;
        
        if (this.attempts >= this.maxAttempts) {
          throw new Error(`Max retry attempts (${this.maxAttempts}) exceeded`);
        }

        const delay = Math.min(
          this.baseDelay * Math.pow(2, this.attempts - 1),
          this.maxDelay
        );

        console.log(`Attempt ${this.attempts} failed, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    throw new Error('Unexpected error in exponential backoff');
  }
}

// Create singleton instances
export const formRateLimiter = new ClientRateLimiter(3, 60000, 300000); // 3 attempts per minute, 5 minute block
export const backoffHandler = new ExponentialBackoff();