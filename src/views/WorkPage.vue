<template>
    <div id="work" class="content-wrap">
        <div id="work-header">
            <h1 class="heading">My SWE Journey <span class="emoji">&#x1F468;&#x200D;&#x1F4BB;</span></h1>
            <div></div>
            <q-btn id="pdf-resume" outline no-caps icon="fas fa-file-pdf" label="Grab My Resume" size="lg" to="/resume.pdf" target="_blank" padding="sm"/>
        </div>
        
        <div id="work-body" itemscope itemtype="https://schema.org/Person">
            <q-carousel
                v-model="slide"
                swipeable
                animated
                padding
                navigation
                transition-prev="slide-right"
                transition-next="slide-left"
                control-color="blue-grey-9"
                navigation-icon="fas fa-circle"
                class="transparent text-black full-height"
                >
                <q-carousel-slide :name="workDatum['company']" v-for="workDatum in workData" class="work-content disable-select carousel">
                    <WorkExperience v-bind="workDatum"></WorkExperience>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import workData from '../content/work';
import WorkExperience from "../components/WorkExperience.vue";

const slide = ref(workData[0]['company']) // First slide is the most recent company
const isActive = ref(false)
</script>

<style lang="scss">
#work-body {
    cursor: grab;
}

.work-slide {
    margin-top: 1rem;
    padding-inline: 0;
}
</style>