<script setup>
import { ref } from 'vue'

import CareerEntry from '@/layouts/CareerEntry.vue'

const index = ref(0)
</script>

<template>
    <div id="career" class="container">
        <h2 class="header">My SWE journey...</h2>
        <div v-for="n in 3" :key="n">
            <CareerEntry :entryData="n - 1" />
        </div>
    </div>
</template>


<style scoped lang="scss">
#career {
    background: #fd5151;
    color: white;
}
</style>