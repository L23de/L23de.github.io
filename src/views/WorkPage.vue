<template>
    <div id="work" class="content-wrap">
        <div id="work-header">
            <h2 class="heading">My SWE Journey <span class="emoji">👨‍💻</span></h2>
            <div></div>
            <q-btn id="pdf-resume" outline no-caps icon="fas fa-file-pdf" label="Grab My Resume" size="lg" to="/resume.pdf" target="_blank" padding="sm"/>
        </div>
        
        <div id="work-body">
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
                <q-carousel-slide :name="workDatum['company']" v-for="workDatum in workData">
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
</script>

<style lang="scss">
#work {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;

    #work-header {
        h2 {
            margin-bottom: 1rem;
        }

        #pdf-resume {
            margin-bottom: 1rem;
            margin-right: 1rem;
        }
    }

    #work-body {
        flex-grow: 1;
        height: 100%;
    }
}

.q-carousel__slide {
    padding-inline: 0;
    height: 100%;
}
</style>