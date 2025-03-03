<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <section class="max-w-7xl mx-auto mt-32">
    <h1 class="text-6xl font-bold font-Raleway text-center mb-5">Our Services</h1>
    <section class="grid grid-cols-1 gap-5 md:grid-col-2 lg:grid-cols-3">
      <Card class="shadow-md border-none">
        <CardHeader>
          <CardTitle>
            <Icon height="48" icon="flat-color-icons:home" width="48" />
          </CardTitle>
          <h1 class="font-bold font-Poppins font-4xl">Residential Waste Collection</h1>
        </CardHeader>
        <CardContent>
          <p>Regular scheduled pickup of household waste and recyclables</p>
        </CardContent>
      </Card>

      <Card class="shadow-md border-none">
        <CardHeader>
          <CardTitle>
            <Icon height="48" icon="noto:office-building" width="48" />
          </CardTitle>
          <h1 class="font-bold font-Poppins font-4xl" font-bold>Commercial Services</h1>
        </CardHeader>
        <CardContent>
          <p>Customized waste management solutions for businesses</p>
        </CardContent>
      </Card>

      <Card class="shadow-md border-none">
        <CardHeader>
          <CardTitle>
            <Icon class="text-green-600" height="48" icon="mdi:recycle" width="48" />
          </CardTitle>
          <h1 class="font-bold font-Poppins font-4xl" font-bold>Recycling Programs</h1>
        </CardHeader>
        <CardContent>
          <p>Comprehensive recycling services for a sustainable future</p>
        </CardContent>
      </Card>
    </section>
  </section>
</template>

<style scoped></style>
