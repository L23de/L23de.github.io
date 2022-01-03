<script setup>
import { ref } from 'vue'
import { QBtn } from 'quasar'
</script>

<template>
    <div id="contact">
        <div id="contact-blurb">
            <h2 class="header">Let's talk</h2>
            <p> Reach out to me on the these platforms!</p>
        </div>
        <div id="contact-buttons">
            <q-btn round icon="far fa-envelope-open" type="a" href="mailto:huangl302d@gmail.com" target="_blank" size="md" unelevated />
            <q-btn round icon="fab fa-linkedin-in" type="a" href="https://www.linkedin.com/in/lesterhuang/" target="_blank" size="md" unelevated />
            <q-btn round icon="fab fa-github" type="a" href="https://github.com/L23de" target="_blank" size="md" unelevated />
            <q-btn round icon="fab fa-instagram" type="a" href="https://www.instagram.com/lester.302d/" target="_blank" size="md" unelevated />
        </div>
    </div>
</template>

<style scoped lang="scss">
#contact {
    background: $primary;
    color: white;
    padding-left: 20vw;
    padding-right: 20vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 20vh;
}

h2 {
    margin-bottom: 0;
}

#contact-blurb {
    text-align: left;
    margin-right: 5vw;
}

#contact-blurb p {
    margin-bottom: 3rem;
    margin-left: 4px; // Realign with the larger header
}
</style>
