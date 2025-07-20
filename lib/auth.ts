import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createBrowserClient(supabaseUrl, supabaseKey)

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  return data
}

export const signUp = async (email: string, password: string, first_name: string, last_name: string, role: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
        role
      }
    }
  })

  if (error) {
    console.error('Signup Error Details:', {
      message: error.message,
      status: error.status
    })
  }

  return data
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    throw error
  }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}