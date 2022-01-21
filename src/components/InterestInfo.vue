<template>
    <div :id="name" class="interest-content">
        <h3 class="interest-title">{{name}}</h3>
        <div class="interest-desc">
            <p v-for="paragraph in desc">{{paragraph}}</p>
        </div>
        <img :alt="name.charAt(0).toUpperCase()+name.slice(1)+' Picture'" class="interest-pic" :src="'/images/interests/'+shorthand+'.webp'" loading="lazy">
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    desc: { type: Array, required: true },
    shorthand: { 
        type: String, 
        required: false,
        default: (props: any) => props.shorthand ? props.shorthand : props.name.toLowerCase()
    },
});
</script>

<style lang="scss">
.interest-pic {
    display: block;
    border-radius: 10px;
    width: 97%;
    margin-inline: 2px;
}
</style>