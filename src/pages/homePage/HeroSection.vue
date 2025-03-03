<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import Link from '@/components/Link.vue'

const cleanStreet: Ref<HTMLElement | null> = ref(null)
const isCleanStreet = ref(false)

useIntersectionObserver(cleanStreet, ([entry]) => {
  if (entry.isIntersecting) {
    isCleanStreet.value = true
  }
})
</script>

<template>
  <section
    ref="cleanStreet"
    class="max-w-7xl mx-auto px-5 lg:px-8 overflow-x-hidden image h-screen bg-cover text-white"
  >
    <section class="flex flex-col items-center gap-2 mb-8 mt-[15rem] font-Raleway">
      <h1 class="text-6xl font-bold">Tired of Inefficient Waste Disposal?</h1>
      <p class="text-lg">
        Our app provides a seamless solution for managing your waste effectively.
      </p>
    </section>

    <section class="flex items-center justify-center gap-2 font-Raleway">
      <Button class="bg-white text-green-500 text-lg font-medium">
        <Link to="/bookings"> Book Now </Link>
      </Button>
    </section>
  </section>
</template>

<style scoped>
.image {
  background-image: url('../../assets/images/jon-tyson-OuOmA4_Sncc-unsplash.jpg');
  /*filter: grayscale(100%);*/
  border-radius: 10px;
}
</style>
