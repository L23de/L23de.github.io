<script setup>
import { ref } from 'vue'

import CareerEntry from '@/layouts/CareerEntry.vue'
import careerData from '@/assets/CareerData.json'

const index = ref(0) // Used if a navbar is used
</script>

<template>
    <div id="career" class="pane">
        <h2 class="header">My SWE journey...</h2>
        <div v-for="n in careerData.length" :key="n"> <!-- Hardcoded 3, 3 entries in CareerData.json -->
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