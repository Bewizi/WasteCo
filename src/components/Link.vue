<script lang="ts" setup>
// import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

interface LinkProps {
  to: string
  activeClass?: string
  exactActiveClass?: string
}

defineProps<LinkProps>()
</script>

<template>
  <RouterLink :active-class="activeClass" :exact-active-class="exactActiveClass" :to="to">
    <slot></slot>
  </RouterLink>
</template>

<style scoped></style>
