// Webhook URL for form submissions
const WEBHOOK_URL = 'https://n8n.pingerchips.com/webhook-test/apply-form'

// Types for our waitlist table
export interface WaitlistEntry {
  id?: string
  name: string
  email: string
  company: string
  role?: string
  ip_address?: string
  user_agent?: string
  created_at?: string
}

// Function to get client IP (best effort - may not work in all environments)
async function getClientIP(): Promise<string | null> {
  try {
    // This is a fallback - in production, you'd get IP from your edge function or server
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || null;
  } catch {
    return null;
  }
}

// Function to add entry to waitlist with enhanced tracking
export async function addToWaitlist(data: Omit<WaitlistEntry, 'id' | 'created_at' | 'ip_address' | 'user_agent'>) {
  try {
    // Get client information for tracking
    const clientIP = await getClientIP();
    const userAgent = navigator.userAgent;

    const enhancedData = {
      ...data,
      ip_address: clientIP,
      user_agent: userAgent,
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enhancedData),
    });

    if (!response.ok) {
      console.error('Webhook error:', response.status, response.statusText);

      // Parse specific error messages for better UX
      if (response.status === 429) {
        return { success: false, error: 'Too many submission attempts. Please wait before trying again.' };
      }

      if (response.status === 409) {
        return { success: false, error: 'This email is already registered for our waitlist.' };
      }

      if (response.status === 400) {
        return { success: false, error: 'Please check your input and try again.' };
      }

      return { success: false, error: 'Unable to join waitlist. Please try again later.' };
    }

    const result = await response.json();
    return { success: true, data: result }
  } catch (error) {
    console.error('Network error:', error)
    return { success: false, error: 'Network error occurred. Please check your connection.' }
  }
}