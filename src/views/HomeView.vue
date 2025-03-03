<script lang="ts" setup>
// import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '@/components/layout/Navbar.vue'
import HeroSection from '@/pages/homePage/HeroSection.vue'
import OurServices from '@/pages/homePage/OurServices.vue'
</script>

<template>
  <Navbar />
  <main class="">
    <HeroSection />
    <OurServices />
    <!--    <TheWelcome />-->
  </main>
</template>
