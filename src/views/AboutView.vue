<template>
  <Navbar />
  <HeroSection />
  <section class="max-w-7xl mx-auto">
    <Stats />

    <!--  Mission  -->
    <section class="mt-32 py-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <section class="leading-loose">
        <h1 class="font-bold font-Raleway text-6xl mb-5">Our Mission</h1>
        <p class="text-gray-500 font-medium text-lg font-Poppins mb-8">
          We are committed to providing innovative waste management solutions while promoting
          environmental sustainability. Our goal is to create a cleaner, healthier environment for
          future generations.
        </p>
        <Button class="bg-green-600 text-white text-lg font-medium py-8 px-5">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>

      <section class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
        <div class="col-span-1 bg-gray-50 flex justify-center py-8 px-8">
          <img :src="GreenDistrict" alt="Sustainability" class="max-h-12" />
        </div>
        <div class="col-span-1 bg-gray-50 flex justify-center py-8 px-8">
          <img :src="GoodIdea" alt="Innovation" class="max-h-12" />
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped></style>
<script lang="ts" setup>
import Navbar from '@/components/layout/Navbar.vue'
import HeroSection from '@/pages/aboutPage/HeroSection.vue'
import Stats from '@/pages/aboutPage/Stats.vue'
import { Button } from '@/components/ui/button'
import Link from '@/components/Link.vue'

import GreenDistrict from '@/assets/svg/green-district-svgrepo-com.svg'
import GoodIdea from '@/assets/svg/good-idea-svgrepo-com.svg'
</script>
