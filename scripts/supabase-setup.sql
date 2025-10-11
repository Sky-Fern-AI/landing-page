-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT NOT NULL,
  role TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add new columns if they don't exist (for existing tables)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'waitlist' AND column_name = 'ip_address') THEN
    ALTER TABLE waitlist ADD COLUMN ip_address INET;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'waitlist' AND column_name = 'user_agent') THEN
    ALTER TABLE waitlist ADD COLUMN user_agent TEXT;
  END IF;
END $$;

-- Create rate limiting table to track submissions by IP
CREATE TABLE IF NOT EXISTS rate_limit_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  action TEXT NOT NULL DEFAULT 'waitlist_submission',
  attempts INTEGER DEFAULT 1,
  first_attempt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_attempt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  blocked_until TIMESTAMP WITH TIME ZONE,
  UNIQUE(ip_address, action)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Create IP address index only if column exists
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'waitlist' AND column_name = 'ip_address') THEN
    CREATE INDEX IF NOT EXISTS idx_waitlist_ip_address ON waitlist(ip_address);
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_rate_limit_ip_action ON rate_limit_log(ip_address, action);
CREATE INDEX IF NOT EXISTS idx_rate_limit_blocked_until ON rate_limit_log(blocked_until);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limit_log ENABLE ROW LEVEL SECURITY;

-- Function to check and update rate limits
CREATE OR REPLACE FUNCTION check_rate_limit(
  client_ip INET,
  max_attempts INTEGER DEFAULT 5,
  window_minutes INTEGER DEFAULT 60,
  block_minutes INTEGER DEFAULT 15
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_attempts INTEGER;
  first_attempt_time TIMESTAMP WITH TIME ZONE;
  blocked_until_time TIMESTAMP WITH TIME ZONE;
BEGIN
  -- Get current rate limit status
  SELECT attempts, first_attempt, blocked_until
  INTO current_attempts, first_attempt_time, blocked_until_time
  FROM rate_limit_log
  WHERE ip_address = client_ip AND action = 'waitlist_submission';

  -- Check if currently blocked
  IF blocked_until_time IS NOT NULL AND blocked_until_time > NOW() THEN
    RETURN FALSE;
  END IF;

  -- If no record exists, create one
  IF current_attempts IS NULL THEN
    INSERT INTO rate_limit_log (ip_address, action, attempts, first_attempt, last_attempt)
    VALUES (client_ip, 'waitlist_submission', 1, NOW(), NOW())
    ON CONFLICT (ip_address, action) 
    DO UPDATE SET 
      attempts = 1,
      first_attempt = NOW(),
      last_attempt = NOW(),
      blocked_until = NULL;
    RETURN TRUE;
  END IF;

  -- Reset counter if window has passed
  IF first_attempt_time < NOW() - INTERVAL '1 minute' * window_minutes THEN
    UPDATE rate_limit_log
    SET attempts = 1, first_attempt = NOW(), last_attempt = NOW(), blocked_until = NULL
    WHERE ip_address = client_ip AND action = 'waitlist_submission';
    RETURN TRUE;
  END IF;

  -- Increment attempts
  current_attempts := current_attempts + 1;

  -- Check if rate limit exceeded
  IF current_attempts > max_attempts THEN
    UPDATE rate_limit_log
    SET attempts = current_attempts,
        last_attempt = NOW(),
        blocked_until = NOW() + INTERVAL '1 minute' * block_minutes
    WHERE ip_address = client_ip AND action = 'waitlist_submission';
    RETURN FALSE;
  END IF;

  -- Update attempts count
  UPDATE rate_limit_log
  SET attempts = current_attempts, last_attempt = NOW()
  WHERE ip_address = client_ip AND action = 'waitlist_submission';

  RETURN TRUE;
END;
$$;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can insert waitlist entries" ON waitlist;
DROP POLICY IF EXISTS "Users can view all waitlist entries" ON waitlist;
DROP POLICY IF EXISTS "Rate limited waitlist inserts" ON waitlist;
DROP POLICY IF EXISTS "Admin can view waitlist" ON waitlist;
DROP POLICY IF EXISTS "System manages rate limits" ON rate_limit_log;

-- Enhanced RLS policy with rate limiting and DDoS protection
CREATE POLICY "Rate limited waitlist inserts" ON waitlist
  FOR INSERT 
  WITH CHECK (
    -- Check rate limit before allowing insert
    check_rate_limit(
      COALESCE(ip_address, '0.0.0.0'::inet),
      5,  -- max 5 attempts
      60, -- per 60 minutes
      15  -- blocked for 15 minutes
    )
    -- Additional validation: prevent obvious spam
    AND length(name) BETWEEN 2 AND 100
    AND length(email) BETWEEN 5 AND 255
    AND length(company) BETWEEN 2 AND 100
    AND (role IS NULL OR length(role) BETWEEN 2 AND 100)
    -- Email format validation
    AND email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    -- Prevent suspicious patterns
    AND name !~ '[<>{}()[\]\\|`~!@#$%^&*+=]'
    AND company !~ '[<>{}()[\]\\|`~!@#$%^&*+=]'
  );

-- Policy for reading waitlist (admin only - remove if not needed)
CREATE POLICY "Admin can view waitlist" ON waitlist
  FOR SELECT 
  USING (false); -- Change to appropriate admin check

-- Policy for rate limit log (system only)
CREATE POLICY "System manages rate limits" ON rate_limit_log
  FOR ALL USING (false);

-- Grant necessary permissions
GRANT INSERT ON waitlist TO anon;
GRANT SELECT, INSERT, UPDATE ON rate_limit_log TO anon;

-- Clean up old rate limit entries (run periodically)
CREATE OR REPLACE FUNCTION cleanup_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  DELETE FROM rate_limit_log 
  WHERE last_attempt < NOW() - INTERVAL '24 hours'
  AND (blocked_until IS NULL OR blocked_until < NOW());
$$;