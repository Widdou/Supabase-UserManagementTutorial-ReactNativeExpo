import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xmtinsbngrabvnjzkixl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdGluc2JuZ3JhYnZuanpraXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MjY2NjYsImV4cCI6MjAzNzAwMjY2Nn0.mjcyED34VjiGZGjfA7H0DSCiB91itXsFflzYZS-14Vk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})