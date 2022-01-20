<template>
    <div :id="name" class="interest-content">
        <img :alt="name.charAt(0).toUpperCase()+name.slice(1)+' Picture'" class="interest-pic" :src="img">
        <h3 class="interest-title">{{name}}</h3>
        <div class="interest-desc">
            <p v-for="paragraph in desc">{{paragraph}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: { type: String, required: true },
    desc: { type: Array, required: true },
    img: { type: String, required: true },
})
</script>

<style lang="scss">
.interest-pic {
    display: block;
    border-radius: 10px;
    width: 100%;
    margin-inline: auto;
}
</style>