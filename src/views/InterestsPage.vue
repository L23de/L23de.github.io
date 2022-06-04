<template>
    <div class="content-wrap shake">
        <h1 class="heading">Other Hobbies <span class="emoji">&#x1F4F7;</span></h1>
        <div id="interests-body">
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
                
                <q-carousel-slide :name="interest['name']" v-for="interest in interests" class="carousel interest-content disable-select">
                    <InterestInfo v-bind="interest"></InterestInfo>
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
import interests from '../content/interests';
import InterestInfo from "../components/InterestInfo.vue";

const slide = ref(interests[0]['name']) // First slide is the most recent company

let labels: any = []
interests.forEach((interest, index) => {
    labels.push({
        label: index + 1,
        value: interest['name']
    })
})
</script>

<style scoped lang="scss">
.heading {
    margin-bottom: 0;
}

#interests-body {
    cursor: grab;
}
</style>