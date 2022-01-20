<template>
    <div class="content-wrap">
        <div id="work-header">
            <h2 class="heading">My SWE Journey 👨‍💻</h2>
            <div></div>
            <q-btn outline no-caps icon="fas fa-file-pdf" label="Grab My Resume" size="md" to="/resume.pdf" target="_blank" padding="sm"/>
        </div>
        
        <div id="work-body">
            <q-carousel
                swipeable
                animated
                prev-icon="fas fa-arrow-left"
                next-icon="fas fa-arrow-right"
                padding
                arrows
                navigation
                navigation-icon="fas fa-circle"
                class="bg-purple text-white rounded-borders"
                >

                <q-carousel-slide name="style" class="text-center" > 
                    <q-scroll-area class="fit">
                        <q-icon name="style" size="56px" />
                        <q-icon name="style" size="56px" />
                        <div class="q-mt-md">
                            lorem ipsum
                        </div>
                        <div class="q-mt-md">
                            lorem ipsum
                        </div>
                        <div class="q-mt-md">
                            lorem ipsum
                        </div>
                        <div class="q-mt-md">
                            lorem ipsum
                        </div>
                        <!-- <WorkExperience v-for="workDatum in workData" v-bind="workDatum"></WorkExperience> -->
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

const slide = ref('style')

console.log(workData[0]);
</script>

<style lang="scss">
#work-header {
    margin-bottom: 1.5rem;

    h2 {
        margin-bottom: 1rem;
    }
}

// #work-body {
//     overflow: auto;
//     height: 100%;
// }
</style>