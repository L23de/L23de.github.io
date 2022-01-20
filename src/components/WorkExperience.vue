<template>
    <div>
        {{company}}
        {{logo_src}}
        {{positions}}
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

interface posConfig {
    title: string,
    dates: string,
    desc: string,
    skills: Array<string>
}

const props = defineProps({
    company: { type: String, required: true },
    logo_src: { type: String, required: true },
    positions: { type: Object as PropType<posConfig>, required: true }
})
</script>

<style lang="scss">
</style>