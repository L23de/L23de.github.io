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
                infinite
                transition-prev="slide-right"
                transition-next="slide-left"
                class="transparent text-black full-height"
                >
                <q-carousel-slide :name="workDatum['shorthand']" v-for="workDatum in workData" class="work-content disable-select carousel">
                    <WorkExperience v-bind="workDatum"></WorkExperience>
                </q-carousel-slide>
            </q-carousel>

            <div class="row justify-center">
                <q-btn-toggle
                    unelevated
                    v-model="slide"
                    toggle-color="orange-1"
                    toggle-text-color="black"
                    :options= "labels"
                />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import workData from '../content/work';
import WorkExperience from "../components/WorkExperience.vue";

const slide = ref(workData[0]['shorthand']) // First slide is the most recent company

let labels = []
workData.forEach((workDatum, index) => {
    labels.push({
        label: index + 1,
        value: workDatum['shorthand']
    })
})
</script>

<style lang="scss">
#work-body {
    cursor: grab;
    padding-inline: 0rem;
}

.work-slide {
    margin-top: 1rem;
    padding-inline: 0;
}

.q-btn-group {
    border-radius: 50%;
    

    .q-btn {
        border-radius: inherit !important;
        height: 40px;
        width: 40px;
    }
}
</style>