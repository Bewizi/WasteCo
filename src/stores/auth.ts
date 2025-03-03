import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.ts'
import { toast } from 'vue3-toastify'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null)
  const isAuthenticated = ref(false)
  const userEmail: Ref<string> = ref('Toluwalase')

  // Initialize authentication state based on token presence in localStorage
  const initializeAuthState = () => {
    const token = localStorage.getItem('token')
    if (token) isAuthenticated.value = true
  }

  // Async functions to handle user authentication login
  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      console.error('Error logging in:', error)
      toast.error('Error logging in:')
      return
    }

    user.value = data?.user || null
    isAuthenticated.value = !!data?.user
    localStorage.setItem('token', data.session?.access_token)
  }

  // Async functions to handle user authentication signup
  const signUp = async (email: string, password: string, name: string, passwordConfirm: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password })

    if (error) {
      console.error('Error logging in:', error)
      return
    }
    if (data.user) {
      const { error: insertError } = await supabase.from('wastecousers').insert([
        {
          id: data.user.id,
          email: data.user.email,
          name: name,
        },
      ])

      if (insertError) {
        console.error('Error inserting user data:', insertError)

        return
      }
    }

    user.value = data?.user || null
    isAuthenticated.value = !!data?.user
    userEmail.value = data.user?.email || ''
    localStorage.setItem('token', <string>data.session?.access_token)
  }

  // Async functions to handle user authentication logout
  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
    isAuthenticated.value = false
    userEmail.value = 'Toluwalase'
    localStorage.removeItem('token')
  }

  initializeAuthState()

  return {
    user,
    isAuthenticated,
    userEmail,
    email: ref(''),
    password: ref(''),
    login,
    signUp,
    logout,
  }
})
