<script lang="ts" setup>
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Cities Served', value: '50+' },
  { label: 'Satisfied Customers', value: '100k+' },
  { label: 'Recycling Rate', value: '75%' },
]
</script>

<template>
  <section class="mt-32">
    <section class="text-center mb-8">
      <h1 class="text-5xl font-bold font-Raleway leading-normal">
        Trusted by thousands of customers
      </h1>
      <p class="text-gray-500 text-lg font-medium font-Poppins">Our numbers speak for themselves</p>
    </section>
    <section class="max-w-4xl mx-auto">
      <Card class="shadow-lg border-none grid grid-cols-4">
        <CardHeader v-for="(stat, index) in stats" :key="index" class="text-center font-Poppins">
          <CardTitle class="text-green-500 text-4xl font-bold">{{ stat.value }}</CardTitle>
          <CardDescription class="text-gray-500 text-lg font-medium">{{
            stat.label
          }}</CardDescription>
        </CardHeader>
      </Card>
    </section>
  </section>
</template>

<style scoped></style>
