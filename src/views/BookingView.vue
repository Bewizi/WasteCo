<script lang="ts" setup>
import Navbar from '@/components/layout/Navbar.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.ts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { supabase } from '@/lib/supabaseClient.ts'
import { toast, type ToastOptions } from 'vue3-toastify'

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push({ name: 'login' })
  }
})

const isSubmitting = ref(false)

const services = [
  'Residential Waste Collection',
  'Commercial Waste Collection',
  'Recycling Collection',
  'Bulk Waste Pickup',
  'Hazardous Waste Disposal',
]

const booking = ref({
  services: '',
  date: '',
  time: '',
  address: '',
  notes: '',
})

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const bookingData = {
      services: booking.value.services,
      date: booking.value.date,
      time: booking.value.time,
      address: booking.value.address,
      notes: booking.value.notes,
    }

    const { data, error } = await supabase.from('wastecoBookings').insert([bookingData])
    if (error) throw error
    toast.success('Booking Created', { autoclose: 1000 } as ToastOptions)

    console.log(booking.value)
  } catch (e) {
    console.error('Error creating booking:', e)
    toast.error('Error creating booking. Please try again.')
  } finally {
    isSubmitting.value = false
    booking.value = {
      services: '',
      date: '',
      time: '',
      address: '',
      notes: '',
    }
  }
}
</script>

<template>
  <Navbar />
  <section class="max-w-lg mx-auto">
    <Card class="w-full shadow shadow-md border-2 border-gray-200">
      <CardHeader>
        <CardTitle> Schedule a Pickup </CardTitle>
        <CardDescription>Book your waste collection service</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit">
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <label for="framework">Service Type</label>
              <Select v-model="booking.services" required>
                <SelectTrigger id="service">
                  <SelectValue class="text-lg" placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent class="w-full shadow shadow-md border-2 border-gray-200 bg-gray-200">
                  <SelectItem
                    v-for="(service, index) in services"
                    :key="index"
                    :value="service"
                    class="w-full"
                  >
                    {{ service }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-sm font-medium text-gray-700" for="date">
                  Preferred Date
                </label>
                <input
                  id="date"
                  v-model="booking.date"
                  class="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  required
                  type="date"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700" for="time">
                  Preferred Time
                </label>
                <Select
                  id="time"
                  v-model="booking.time"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                  required
                >
                  <SelectTrigger id="time">
                    <SelectValue class="text-lg" placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent
                    class="w-full shadow shadow-md border-2 border-gray-200 bg-gray-200"
                  >
                    <!--                    <SelectItem value="">Select a time</SelectItem>-->
                    <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                    <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div class="flex flex-col space-y-1.5">
              <label for="name">Pickup Address</label>
              <textarea
                id="name"
                v-model="booking.address"
                class="border-2 border-gray-200 rounded-md p-2 resize-none"
                required
              />
            </div>

            <div class="flex flex-col space-y-1.5">
              <label for="name">Additional Notes </label>
              <textarea
                id="name"
                v-model="booking.notes"
                class="border-2 border-gray-200 rounded-md p-2 resize-none"
                placeholder="Any special instructions or requirements..."
              />
            </div>
          </div>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              :disabled="isSubmitting"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              type="submit"
            >
              {{ isSubmitting ? 'Submitting...' : 'Schedule Pickup' }}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped></style>
