// Debug the RLS policy issue
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tokmfzaqdtowreidxdwc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva21memFxZHRvd3JlaWR4ZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNDE4NTIsImV4cCI6MjA3NTcxNzg1Mn0.TnIFWnM73EdEG2yGGTQWx2pw9c8Sg0SfTq6LHMSG0wo'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkTables() {
  console.log('🔍 Checking table structure...\n')
  
  try {
    // Check if waitlist table exists and get structure
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .limit(0)
    
    if (error) {
      console.error('❌ Error accessing waitlist table:', error.message)
    } else {
      console.log('✅ Waitlist table accessible')
    }
  } catch (error) {
    console.error('❌ Network error:', error.message)
  }
}

async function testSimpleInsert() {
  console.log('🧪 Testing simple insert without rate limiting...\n')
  
  // Try a very basic insert to see what validation fails
  const simpleData = {
    name: 'Test User',
    email: `simple.${Date.now()}@test.com`,
    company: 'Test Company'
  }
  
  console.log('Attempting insert with:', simpleData)
  
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([simpleData])
      .select()
    
    if (error) {
      console.error('❌ Insert failed:', error)
      
      // Let's check what specific validation is failing
      console.log('\n🔍 Analyzing error...')
      console.log('Error code:', error.code)
      console.log('Error message:', error.message)
      console.log('Error details:', error.details)
      console.log('Error hint:', error.hint)
    } else {
      console.log('✅ Insert successful!')
      console.log('Result:', data)
    }
  } catch (error) {
    console.error('❌ Network error:', error.message)
  }
}

async function testRateLimitFunction() {
  console.log('🧪 Testing rate limit function directly...\n')
  
  try {
    const { data, error } = await supabase
      .rpc('check_rate_limit', {
        client_ip: '127.0.0.1'
      })
    
    if (error) {
      console.error('❌ Rate limit function error:', error)
      console.log('This might be why our policy is failing!')
    } else {
      console.log('✅ Rate limit function result:', data)
    }
  } catch (error) {
    console.error('❌ Network error calling rate limit function:', error.message)
  }
}

async function runDiagnostics() {
  await checkTables()
  await testRateLimitFunction()
  await testSimpleInsert()
}

console.log('🔧 Running diagnostics...\n')
runDiagnostics().catch(console.error)