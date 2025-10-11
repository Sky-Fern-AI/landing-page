// Test the actual form submission function
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tokmfzaqdtowreidxdwc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva21memFxZHRvd3JlaWR4ZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNDE4NTIsImV4cCI6MjA3NTcxNzg1Mn0.TnIFWnM73EdEG2yGGTQWx2pw9c8Sg0SfTq6LHMSG0wo'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Simulate the addToWaitlist function
async function addToWaitlist(data) {
  try {
    // Simulate getting client IP (will be null in Node.js environment)
    const enhancedData = {
      ...data,
      ip_address: '127.0.0.1', // Simulated IP
      user_agent: 'Test User Agent',
    };

    console.log('📤 Submitting data:', enhancedData);

    const { data: result, error } = await supabase
      .from('waitlist')
      .insert([enhancedData])
      .select()

    if (error) {
      console.error('❌ Supabase error:', error);
      
      // Parse specific error messages for better UX
      if (error.message.includes('rate limit') || error.message.includes('check_rate_limit')) {
        return { success: false, error: 'Too many submission attempts. Please wait before trying again.' };
      }
      
      if (error.message.includes('duplicate key') || error.message.includes('unique constraint')) {
        return { success: false, error: 'This email is already registered for our waitlist.' };
      }
      
      if (error.message.includes('invalid input') || error.message.includes('validation')) {
        return { success: false, error: 'Please check your input and try again.' };
      }
      
      if (error.message.includes('row-level security')) {
        return { success: false, error: 'Data validation failed. Please check your input.' };
      }

      return { success: false, error: 'Unable to join waitlist. Please try again later.' };
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('❌ Network error:', error)
    return { success: false, error: 'Network error occurred. Please check your connection.' }
  }
}

async function testFormSubmission() {
  console.log('🧪 Testing form submission with valid data...\n');
  
  // Test 1: Valid submission
  const validData = {
    name: 'John Doe',
    email: `john.doe.${Date.now()}@example.com`,
    company: 'Acme Corp',
    role: 'UX Researcher'
  };
  
  console.log('Test 1: Valid submission');
  const result1 = await addToWaitlist(validData);
  console.log('Result:', result1);
  console.log('');
  
  // Test 2: Duplicate email (should fail)
  console.log('Test 2: Duplicate email');
  const result2 = await addToWaitlist(validData);
  console.log('Result:', result2);
  console.log('');
  
  // Test 3: Invalid email format
  console.log('Test 3: Invalid email format');
  const invalidEmailData = {
    name: 'Jane Doe',
    email: 'invalid-email',
    company: 'Test Company',
    role: 'Designer'
  };
  const result3 = await addToWaitlist(invalidEmailData);
  console.log('Result:', result3);
  console.log('');
  
  // Test 4: Suspicious input (should fail)
  console.log('Test 4: Suspicious input');
  const suspiciousData = {
    name: 'Test<script>alert("xss")</script>',
    email: `test.${Date.now()}@example.com`,
    company: 'Evil Corp',
    role: 'Hacker'
  };
  const result4 = await addToWaitlist(suspiciousData);
  console.log('Result:', result4);
  console.log('');
  
  // Test 5: Empty/short fields
  console.log('Test 5: Short name');
  const shortData = {
    name: 'A',
    email: `short.${Date.now()}@example.com`,
    company: 'B',
    role: 'Manager'
  };
  const result5 = await addToWaitlist(shortData);
  console.log('Result:', result5);
}

console.log('🚀 Starting form submission tests...\n');
testFormSubmission().catch(console.error);