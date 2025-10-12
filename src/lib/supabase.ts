import { createClient } from '@supabase/supabase-js'

// Hardcoded Supabase values
const supabaseUrl = 'https://tokmfzaqdtowreidxdwc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva21memFxZHRvd3JlaWR4ZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNDE4NTIsImV4cCI6MjA3NTcxNzg1Mn0.TnIFWnM73EdEG2yGGTQWx2pw9c8Sg0SfTq6LHMSG0wo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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

    const { data: result, error } = await supabase
      .from('waitlist')
      .insert([enhancedData])
      .select()

    if (error) {
      console.error('Supabase error:', error);

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

      return { success: false, error: 'Unable to join waitlist. Please try again later.' };
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Network error:', error)
    return { success: false, error: 'Network error occurred. Please check your connection.' }
  }
}