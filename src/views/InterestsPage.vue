<template>
    <div class="content-wrap">
        <h2 class="heading">Other Hobbies <span class="emoji">🚴</span></h2>
        <div id="interests-body">
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
                
                <q-carousel-slide :name="interest['name']" v-for="interest in interests">
                    <InterestInfo v-bind="interest"></InterestInfo>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import interests from '../content/interests';
import InterestInfo from "../components/InterestInfo.vue";

const slide = ref(interests[0]['name']) // First slide is the most recent company
</script>

<style scoped lang="scss">
.heading {
    margin-bottom: 0;
}
</style>