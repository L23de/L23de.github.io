<template>
    <div class="page">
        <div id="intro">
            <span id="wave">👋</span>
            <h1>I'm Lester Huang</h1>
            <h3 id="desc">A lifelong learner 📖 with a desire for adventure 🗺️</h3>
        </div>
        <div id="contact">
            <q-btn round icon="far fa-envelope-open" type="a" href="mailto:huangl302d@gmail.com" target="_blank" size="1.1rem" unelevated />
            <q-btn round icon="fab fa-linkedin-in" type="a" href="https://www.linkedin.com/in/lesterhuang/" target="_blank" size="1.1rem" unelevated />
            <q-btn round icon="fab fa-github" type="a" href="https://github.com/L23de" target="_blank" size="1.1rem" unelevated />
            <q-btn round icon="fab fa-instagram" type="a" href="https://www.instagram.com/lester.302d/" target="_blank" size="1.1rem" unelevated />
        </div>
    </div>
</template>

<script setup lang="ts">
// import { QBtn } from 'quasar'
</script>

<style scoped lang="scss">

h1 {
    margin-block: 0;
}

h3 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

#intro {
    display: flex;
    padding-top: 10vh;
    flex-direction: column;

    #wave {
        font-size: 48px;
        
        &:hover {
            animation: wave-animation 2.5s infinite;
            transform-origin: 48px 48px;
        }
    }
}

#contact {
    color: black;
    display: flex;
    flex-direction: row;
    margin-bottom: 8rem;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
    100% { transform: rotate( 0.0deg) }
}
</style>