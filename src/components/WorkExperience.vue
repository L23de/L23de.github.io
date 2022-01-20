<template>
    <div :id="company+'-info'" class="work-content">
        <a :href="website" target="_blank"><img :src="logo_src" class="banner-img" :alt="company.charAt(0).toUpperCase()+company.slice(1)+'\'s Banner'"/></a>
        <div :id="company+'-pos-'+index" v-for="(position: posConfig, index) in positions">
            <p class="pos-title">{{position['title']}}</p>
            <p class="pos-date">{{position['dates']}}</p>
            <div id="pos-skills">
                <q-chip v-for="skill in position['skills']" :label="skill"/>
            </div>
            <div id="pos-desc">
                <p v-for="paragraph in position['desc']">{{paragraph}}</p>
            </div>
        </div>
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
    website: { type: String, required: false },
    logo_src: { type: String, required: true },
    positions: { type: Object as PropType<Array<posConfig>>, required: true }
})
</script>

<style lang="scss">
.banner-img {
    display: block;
    text-align: center;
    width: min(97%, 500px);
    height: auto;
    border-radius: 20px;
    background-color: white;
    outline: 2px solid black;
    margin: 3px;
    margin-bottom: 1rem;
    transition: 0.5s ease;

    &:hover {
        opacity: 0.85;
    }
}
</style>