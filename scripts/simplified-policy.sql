-- Temporarily create a simpler policy for testing

-- Drop the complex policy
DROP POLICY IF EXISTS "Rate limited waitlist inserts" ON waitlist;

-- Create a simple policy that just allows basic validation
CREATE POLICY "Simple waitlist inserts" ON waitlist
  FOR INSERT 
  WITH CHECK (
    -- Basic validation without rate limiting
    length(name) BETWEEN 2 AND 100
    AND length(email) BETWEEN 5 AND 255
    AND length(company) BETWEEN 2 AND 100
    AND (role IS NULL OR length(role) BETWEEN 2 AND 100)
    -- Email format validation
    AND email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    -- Prevent suspicious patterns
    AND name !~ '[<>{}()[\]\\|`~!@#$%^&*+=]'
    AND company !~ '[<>{}()[\]\\|`~!@#$%^&*+=]'
  );