<script setup>
import NavBar from '@/components/NavBar.vue'
import SplashPane from '@/components/SplashPane.vue'
import CareerPane from '@/components/CareerPane.vue'
import InterestPane from '@/components/InterestPane.vue'
import ContactPane from '@/components/ContactPane.vue'

import { QScrollArea } from 'quasar'
</script>

<template>
  <NavBar />
  <SplashPane />
  <CareerPane />
  <!-- <InterestPane /> -->
  <ContactPane />
</template>