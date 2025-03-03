<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.ts'
import { Button } from '@/components/ui/button'
import Link from '@/components/Link.vue'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { toast, type ToastOptions } from 'vue3-toastify'

const route = useRouter()
const auth = useAuthStore()
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const showpassword = ref(false)
const confirmpassword = ref(false)
const isLoading = ref(false)

const toggleShowPassword = () => {
  showpassword.value = !showpassword.value
}

const toggleConfirmPassword = () => {
  confirmpassword.value = !confirmpassword.value
}

const handlesubmit = async () => {
  if (password.value !== passwordConfirm.value) {
    toast.error('Password do not match', { autoClose: 1000 } as ToastOptions)
    return
  }

  isLoading.value = true
  toast.success('Register Successfully', { autoclose: 1000 } as ToastOptions)
  try {
    await auth.signUp(email.value, password.value, name.value, passwordConfirm.value)
    route.push({ name: 'dashboard' })
  } catch (e) {
    console.error('Error Logging in:', e)
    toast.error('Error Registering', { autoclose: 1000 } as ToastOptions)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="shadow-md p-4 max-w-md mx-auto h-screen">
    <!-- logo -->
    <div class="text-center mt-20">
      <h1 class="text-green-600 font-bold text-4xl">WasteCo</h1>
      <p class="mt-4">Welcome to <strong class="text-green-600">WasteCo</strong> Limited</p>
    </div>
    <form class="grid place-content-center" @submit.prevent="handlesubmit">
      <!--   name -->
      <div class="mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2">
        <span>
          <Icon height="24" icon="mdi:user" style="color: #00000040" width="24" />
        </span>
        <input
          id="name"
          v-model="name"
          class="w-full placeholder:text-center placeholder:text-lg outline-none text-xl"
          placeholder="John Doe"
          type="text"
        />
        <!--      <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>-->
      </div>

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
        <!--      <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>-->
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
          placeholder="password"
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

      <!-- confirm password -->
      <div
        class="mt-4 flex gap-1.5 items-center border border-gray-500 rounded-md py-2 px-2 w-full"
      >
        <span>
          <Icon height="24" icon="mdi:password" style="color: #00000040" width="24" />
        </span>
        <input
          id="passwordConfirm"
          v-model="passwordConfirm"
          :type="confirmpassword ? 'text' : 'password'"
          class="w-full placeholder:text-center placeholder:text-lg outline-none text-xl"
          placeholder="confirm password"
        />
        <span class="cursor-pointer" @click="toggleConfirmPassword">
          <Icon
            v-if="confirmpassword"
            height="24"
            icon="mdi-light:eye"
            style="color: #00000040"
            width="24"
          />
          <Icon v-else height="24" icon="mdi-light:eye-off" style="color: #00000040" width="24" />
        </span>
      </div>
      <p v-if="password !== passwordConfirm" class="text-red-500 text-sm mt-2">
        Password do not match
      </p>
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
        <template v-else>Register</template>
      </Button>
    </form>

    <!--  navigates to the register/create account page-->
    <div class="flex items-center justify-center gap-5 mt-8">
      <p>Have an account?</p>
      <Link active-class="text-blue-600" class="underline hover:text-blue-600" to="/auth/login"
        >Login</Link
      >
    </div>
  </section>
</template>

<style scoped></style>
