import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { type ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function createServerSupabaseClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: Partial<ResponseCookie>) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: Partial<ResponseCookie>) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}

export async function getServerUser() {
  const supabase = await createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}