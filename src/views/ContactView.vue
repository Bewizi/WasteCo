<script lang="ts" setup>
import Navbar from '@/components/layout/Navbar.vue'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { supabase } from '@/lib/supabaseClient.ts'
import { toast, type ToastOptions } from 'vue3-toastify'
import { Icon } from '@iconify/vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isLoading: Ref<boolean> = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  try {
    const { data, error } = await supabase.from('contactform').insert([form.value])
    if (error) throw error
    toast.success('Message sent successfully', { autoclose: 1000 } as ToastOptions)
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  } catch (e) {
    console.error('Error submitting form:', e)
    toast.error('There was an error submitting your message. Please try again.')
  }
  isLoading.value = false
}
</script>

<template>
  <Navbar />
  <section class="max-w-7xl mx-auto">
    <section class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
      <section>
        <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Information</h2>
        <div class="mt-3">
          <p class="text-lg text-gray-500">
            Have questions? We're here to help. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
        <div class="mt-9">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="ml-3 text-base text-gray-500">
              <p>+234 90-648-097-40</p>
            </div>
          </div>
          <div class="mt-6 flex">
            <div class="flex-shrink-0">
              <svg
                class="h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="ml-3 text-base text-gray-500">
              <p>support@wasteco.com</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-12 sm:mt-16 md:mt-0">
        <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Send us a message</h2>
        <form class="mt-9 grid grid-cols-1 gap-y-6" @submit.prevent="handleSubmit">
          <div>
            <label class="block text-sm font-medium text-gray-700" for="name">Name</label>
            <div class="mt-1">
              <input
                id="name"
                v-model="form.name"
                class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                name="name"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                name="email"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700" for="subject">Subject</label>
            <div class="mt-1">
              <input
                id="subject"
                v-model="form.subject"
                class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                name="subject"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700" for="message">Message</label>
            <div class="mt-1">
              <textarea
                id="message"
                v-model="form.message"
                class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                name="message"
                required
                rows="4"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              :disabled="isLoading"
              class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              type="submit"
            >
              <template v-if="isLoading">
                <Icon
                  class="animate-spin"
                  height="24"
                  icon="nrk:spinner"
                  style="color: #fff"
                  width="24"
                />
              </template>
              <template v-else> Send Message </template>
            </button>
          </div>
        </form>
      </section>
    </section>
  </section>
</template>

<style scoped></style>
