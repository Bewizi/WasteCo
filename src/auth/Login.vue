<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import Link from '@/components/Link.vue'
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/stores/auth.ts'
import { useRouter } from 'vue-router'
import { toast, type ToastOptions } from 'vue3-toastify'

const route = useRouter()

const email = ref('')
const password = ref('')
const showpassword = ref(false)
const authUser = useAuthStore()
const isLoading = ref(false)

const toggleShowPassword = () => {
  showpassword.value = !showpassword.value
}

const handlesubmit = async () => {
  isLoading.value = true
  toast.success('Login Successful', { autoclose: 1000 } as ToastOptions)
  try {
    await authUser.login(email.value, password.value)
    route.push({ name: 'dashboard' })
  } catch (e) {
    console.error('Error Logging in:', e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="shadow-md max-w-md mx-auto p-4 h-screen">
    <!-- logo -->

    <h1 class="text-center mt-20 text-green-600 font-bold text-4xl">WasteCo</h1>
    <form action="" class="grid place-content-center" method="post" @submit.prevent="handlesubmit">
      <!--   email -->
      <div class="mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2">
        <span>
          <Icon height="24" icon="ic:baseline-email" style="color: #00000040" width="24" />
        </span>
        <input
          id="email"
          v-model="email"
          class="w-full placeholder:text-center placeholder:text-lg outline-none text-xl"
          placeholder="John@gmail.com"
          type="email"
        />
      </div>

      <!--   password -->
      <div
        class="mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2 w-full"
      >
        <span>
          <Icon height="24" icon="mdi:password" style="color: #00000040" width="24" />
        </span>
        <input
          id="password"
          v-model="password"
          :type="showpassword ? 'text' : 'password'"
          class="w-full placeholder:text-center placeholder:text-lg outline-none text-xl"
          placeholder="⚫⚫⚫⚫⚫"
        />
        <span class="cursor-pointer" @click="toggleShowPassword">
          <Icon
            v-if="showpassword"
            height="24"
            icon="mdi-light:eye"
            style="color: #00000040"
            width="24"
          />
          <Icon v-else height="24" icon="mdi-light:eye-off" style="color: #00000040" width="24" />
        </span>
        <!--      <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>-->
      </div>
      <Link class="mb-5 text-right mt-2 text-sm" to="">Forgot Password</Link>
      <Button class="bg-green-500 text-white text-xl" type="submit">
        <template v-if="isLoading">
          <Icon
            class="animate-spin"
            height="24"
            icon="nrk:spinner"
            style="color: #fff"
            width="24"
          />
        </template>
        <template v-else> Login </template>
      </Button>
    </form>

    <!--  navigates to the register/create account page-->
    <div class="flex items-center justify-center gap-5 mt-8">
      <p>I don't have an account?</p>
      <Link active-class="text-blue-600" class="underline hover:text-blue-600" to="/auth/register"
        >Register</Link
      >
    </div>
  </section>
</template>

<style scoped></style>
