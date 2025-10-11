// Test each validation rule individually
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tokmfzaqdtowreidxdwc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva21memFxZHRvd3JlaWR4ZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNDE4NTIsImV4cCI6MjA3NTcxNzg1Mn0.TnIFWnM73EdEG2yGGTQWx2pw9c8Sg0SfTq6LHMSG0wo'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test different validation scenarios
const testCases = [
  {
    name: 'Perfect Valid Data',
    data: {
      name: 'John Doe',
      email: `john.${Date.now()}@example.com`,
      company: 'Acme Corporation',
      role: 'UX Researcher',
      ip_address: '192.168.1.1',
      user_agent: 'Mozilla/5.0 Test'
    }
  },
  {
    name: 'Minimal Valid Data',
    data: {
      name: 'Jo',
      email: `jo.${Date.now()}@ex.co`,
      company: 'Co',
      role: null,
      ip_address: '127.0.0.1',
      user_agent: 'Test'
    }
  },
  {
    name: 'No IP Address',
    data: {
      name: 'Jane Smith',
      email: `jane.${Date.now()}@example.com`,
      company: 'Test Corp',
      role: 'Designer',
      ip_address: null,
      user_agent: 'Test Browser'
    }
  },
  {
    name: 'Empty Role',
    data: {
      name: 'Bob Wilson',
      email: `bob.${Date.now()}@example.com`,
      company: 'Example Inc',
      role: '',
      ip_address: '10.0.0.1',
      user_agent: 'Test'
    }
  }
]

async function testValidationRule(testCase) {
  console.log(`\n🧪 Testing: ${testCase.name}`)
  console.log('Data:', JSON.stringify(testCase.data, null, 2))
  
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([testCase.data])
      .select()
    
    if (error) {
      console.log(`❌ Failed: ${error.message}`)
      if (error.code === '42501') {
        console.log('   → RLS policy validation failed')
      }
      return false
    } else {
      console.log('✅ Success!')
      console.log('   → Inserted ID:', data[0]?.id)
      return true
    }
  } catch (error) {
    console.log(`❌ Network error: ${error.message}`)
    return false
  }
}

async function runValidationTests() {
  console.log('🔬 Testing validation rules...')
  
  let successCount = 0
  
  for (const testCase of testCases) {
    const success = await testValidationRule(testCase)
    if (success) successCount++
    
    // Small delay between tests
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  
  console.log(`\n📊 Results: ${successCount}/${testCases.length} tests passed`)
  
  if (successCount === 0) {
    console.log('\n💡 All tests failed - likely an issue with the RLS policy or missing function')
    console.log('   Try running the simplified-policy.sql first')
  }
}

runValidationTests().catch(console.error)