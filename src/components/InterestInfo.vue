<template>
    <h2 class="interest-title">{{ name }}</h2>
    <div class="interest-desc">
        <p v-for="paragraph in desc">{{ paragraph }}</p>
    </div>
    <img
        :alt="name.charAt(0).toUpperCase() + name.slice(1) + ' Picture'"
        class="interest-pic"
        :src="'/images/interests/' + shorthand + '.webp'"
        loading="lazy"
    />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    desc: { type: Array, required: true },
    shorthand: {
        type: String,
        required: false,
        default: (props: any) =>
            props.shorthand ? props.shorthand : props.name.toLowerCase(),
    },
});
</script>

<style lang="scss">
.interest-pic {
    display: block;
    border-radius: 10px;
    width: calc(100% - #{$borderOutline * 2});
    margin-inline: $borderOutline;
}

h2 {
    line-height: 1.5em;
    margin-bottom: 3px;
}
</style>
