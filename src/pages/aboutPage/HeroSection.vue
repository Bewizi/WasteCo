<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core'
import { type Ref, ref } from 'vue'

const trashcan: Ref<HTMLElement | null> = ref(null)
const isTrashCan = ref(false)

useIntersectionObserver(trashcan, ([entry]) => {
  if (entry.isIntersecting) {
    isTrashCan.value = true
  }
})
</script>

<template>
  <!--Hero section-->
  <section ref="trashcan" class="hero-container bg-green-900 bg-cover h-[80vh]">
    <section class="max-w-7xl mx-auto text-white pt-[12rem]">
      <h1 class="text-6xl font-bold font-Raleway mb-5">About Us</h1>
      <p class="font-Poppins text-lg font-medium">
        Leading the way in sustainable waste management solutions for a cleaner, greener future.
      </p>
    </section>
  </section>
</template>

<style scoped>
.hero-container {
  background-image: url('../../assets/images/pawel-czerwinski-RkIsyD_AVvc-unsplash.jpg');
  background-blend-mode: overlay;
}
</style>
