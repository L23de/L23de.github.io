<script setup>
import { QScrollArea } from 'quasar'

import careerData from '@/assets/CareerData.json' // JSON data to serve as templating

const props = defineProps({
    entryData: Number
})

const barStyle = "{}" // CSS for the scroll area's scrollbar
</script>

<template>
    <div id="career-entry">
        <div id="logo">
            <img :src="careerData[entryData].logo_url" :alt="careerData[entryData].company + ' Logo'" />
        </div>

        <div id="content">
            <h3 id="company" v-html="careerData[entryData].company"></h3>
            <div id="scroll-window" >
                <div id="separator">
                    <!-- Separator to show an indent with respect to subpositions under the same company -->
                </div>
                <div id="position" v-for="position in careerData[entryData].positions" :key="position" >
                    <h4 id="title" v-html="position.title"></h4>
                    <h5 id="time" v-html="position.time"></h5>
                    <div id="skills">
                        <q-btn id="skill-btns" v-for="skill in position.skills" :key="skill" :ripple="false" outline rounded :label="skill" />
                    </div>
                    <p id="position-content" v-html="position.summary"></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
$careerMargins: 15vw;

#career-entry {
    display: flex;
    margin-left: $careerMargins;
    margin-right: $careerMargins;
    align-items: flex-start;
}

$logoDimensions: 150px;

#logo {
    margin-top: 1rem;
    // outline: 3px solid rgb(61, 38, 38); // Debugging purposes
}

#logo, img {
    width: $logoDimensions;
    height: $logoDimensions;
}

#scroll-window {
    width: vw;
    overflow: auto;
    margin-left: 2rem;
}

#career-entry {
    margin-top: 2rem;
}

#content {
    text-align: left;
    margin-left: 4vw;

    #company { // h3
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
}

#position {
    #title { // h4
        margin-top: 1rem;
        margin-bottom: 0;
    }

    #time { // h5
        margin-top: 0;
        margin-bottom: 1rem;
    }

    #position-content {
        margin-bottom: 0.5rem;
    }

    #skills {
        margin-bottom: 1rem;

        #skill-btns {
            margin-right: 0.25rem;
        }
    }
}
</style>