<script setup>
import CareerData from '@/assets/CareerData.json'
import CareerEntry from '@/layouts/CareerEntry.vue'
</script>

<template>
    <div id="career" class="container">
        <h2 class="header">My SWE journey...</h2>
        <CareerEntry />
    </div>
</template>


<style scoped lang="scss">
#career {
    background: $amber;
    color: white;
}
</style>