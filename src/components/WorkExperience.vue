<template>
    <div :id="company" class="work-content">
        <a :href="website" target="_blank"><img :src="'/images/work/'+shorthand+'.webp'" class="banner-img" :alt="company.charAt(0).toUpperCase()+company.slice(1)+'\'s Banner'" loading="lazy"/></a>
        <div :id="company+'-pos-'+index" v-for="(position, index) in positions" class="pos-info">
            <h3 class="pos-title" itemprop="jobTitle">{{position['title']}}</h3>
            <p class="pos-date">{{position['dates']}}</p>
            <div class="pos-skills">
                <q-chip v-for="skill in position['skills']" :label="skill" :ripple="false" outline rounded/>
            </div>
            <div class="pos-desc">
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
    desc: Array<string>,
    skills: Array<string>
}

const props = defineProps({
    shorthand: { type: String, required: true },
    company: { type: String, required: true },
    website: { type: String, required: true },
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
    margin: 3px;
    margin-bottom: 1rem;
}

// Left most child gets aligned properly
.q-chip:nth-child(1) {
    margin-left: 0;
}

.pos-info {
    margin-bottom: 2rem;

    .pos-title {
        font-size: 1.75rem;
        margin-bottom: 0;
    }

    .pos-date {
        margin-top: -5px;
        margin-bottom: 0;
    }
}
</style>