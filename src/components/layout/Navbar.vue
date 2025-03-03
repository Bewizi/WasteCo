<script lang="ts" setup>
import Link from '@/components/Link.vue'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '../../stores/auth.ts'
import { useRouter } from 'vue-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = async () => {
  await authStore.logout()
  router.push({ name: 'home' })
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-8 md:px-5 lg:px-5">
    <header class="flex justify-between">
      <!-- logo -->
      <section>
        <h1 class="text-green-600 font-bold text-4xl font-Raleway">
          <Link to="/"> WasteCo </Link>
        </h1>
      </section>
      <nav class="flex">
        <ul class="flex items-center space-x-8 font-medium font-lg font-Poppins">
          <li>
            <Link active-class="text-green-500" class="hover:text-green-600/60" to="/">Home</Link>
          </li>
          <li>
            <Link active-class="text-green-500" class="hover:text-green-600/60" to="/about"
              >About</Link
            >
          </li>
          <li>
            <Link active-class="text-green-500" class="hover:text-green-600/60" to="/contact"
              >Contact</Link
            >
          </li>

          <li v-if="authStore.isAuthenticated">
            <Link active-class="text-green-500" class="hover:text-green-600/60" to="/bookings"
              >Bookings</Link
            >
          </li>

          <li v-if="authStore.isAuthenticated">
            <Link active-class="text-green-500" class="hover:text-green-600/60" to="/dashboard"
              >Dashboard</Link
            >
          </li>
        </ul>
      </nav>
      <div class="flex items-center space-x-4">
        <template v-if="!authStore.isAuthenticated">
          <Button class="shadow-none bg-transparent text-lg font-medium">
            <Link
              active-class="bg-green-600 text-white px-8 py-2  rounded-md"
              class="text-green-400"
              to="/auth/login"
              >Login</Link
            >
          </Button>

          <Button class="shadow-none bg-transparent text-lg font-medium">
            <Link
              active-class="bg-green-600 text-white px-8 py-2 rounded-md"
              class="text-green-400"
              to="/auth/register"
              >Register</Link
            >
          </Button>
        </template>

        <template v-else>
          <DropdownMenu>
            <DropdownMenuTrigger class="cursor-pointer">{{
              authStore.userEmail
            }}</DropdownMenuTrigger>
            <DropdownMenuContent class="border-none">
              <DropdownMenuItem>
                <Button
                  class="bg-transparent shadow-none text-red-600 hover:text-red-800 cursor-pointer"
                  @click="handleLogout"
                >
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </template>
      </div>
    </header>
  </section>
</template>

<style scoped></style>
