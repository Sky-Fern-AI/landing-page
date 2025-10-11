// Simple API test script
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tokmfzaqdtowreidxdwc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva21memFxZHRvd3JlaWR4ZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNDE4NTIsImV4cCI6MjA3NTcxNzg1Mn0.TnIFWnM73EdEG2yGGTQWx2pw9c8Sg0SfTq6LHMSG0wo'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  console.log('🧪 Testing Supabase connection...')
  
  try {
    // Test 1: Check connection
    const { data, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
    
    if (error) {
      console.error('❌ Connection failed:', error.message)
      return false
    }
    
    console.log('✅ Connection successful!')
    return true
  } catch (error) {
    console.error('❌ Network error:', error.message)
    return false
  }
}

async function testInsert() {
  console.log('🧪 Testing form submission...')
  
  const testData = {
    name: 'Test User',
    email: `test-${Date.now()}@example.com`,
    company: 'Test Company',
    role: 'Tester',
    ip_address: '127.0.0.1',
    user_agent: 'Test Agent'
  }
  
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([testData])
      .select()
    
    if (error) {
      console.error('❌ Insert failed:', error.message)
      console.error('Error details:', error)
      return false
    }
    
    console.log('✅ Insert successful!')
    console.log('Inserted data:', data)
    return true
  } catch (error) {
    console.error('❌ Network error during insert:', error.message)
    return false
  }
}

async function testRateLimit() {
  console.log('🧪 Testing rate limit function...')
  
  try {
    const { data, error } = await supabase
      .rpc('check_rate_limit', {
        client_ip: '127.0.0.1',
        max_attempts: 5,
        window_minutes: 60,
        block_minutes: 15
      })
    
    if (error) {
      console.error('❌ Rate limit test failed:', error.message)
      return false
    }
    
    console.log('✅ Rate limit function works!')
    console.log('Rate limit result:', data)
    return true
  } catch (error) {
    console.error('❌ Rate limit function error:', error.message)
    return false
  }
}

async function runTests() {
  console.log('🚀 Starting API tests...\n')
  
  const connectionOk = await testConnection()
  if (!connectionOk) {
    console.log('\n❌ Cannot proceed - connection failed')
    return
  }
  
  console.log('')
  await testRateLimit()
  
  console.log('')
  await testInsert()
  
  console.log('\n🏁 Tests completed!')
}

runTests().catch(console.error)