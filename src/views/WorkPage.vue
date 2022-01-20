<template>
    <div id="work" class="content-wrap">
        <div id="work-header">
            <h2 class="heading">My SWE Journey 👨‍💻</h2>
            <div></div>
            <q-btn outline no-caps icon="fas fa-file-pdf" label="Grab My Resume" size="md" to="/resume.pdf" target="_blank" padding="sm"/>
        </div>
        

        <div id="work-body">
            <q-carousel
                v-model="slide"
                swipeable
                animated
                padding
                navigation
                height="60vh"
                control-color="blue-grey-9"
                navigation-icon="fas fa-circle"
                class="transparent text-black"
                >
                <q-carousel-slide :name="workDatum['company']" v-for="workDatum in workData">
                    <q-scroll-area class="fit">
                        <WorkExperience v-bind="workDatum"></WorkExperience>
                    </q-scroll-area>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import workData from '@/content/work';
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
    // margin-bottom: 0rem;

        h2 {
            margin-bottom: 1rem;
        }
    }

    #work-body {
        flex-grow: 1;
        height: 100%;
    }
}

.q-carousel__slide {
    padding-inline: 0;
}
</style>