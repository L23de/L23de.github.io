<template>
    <div class="content-wrap simple-page">
        <div class="p-intro" itemscope itemtype="https://schema.org/Person">
            <!-- CSS Emoji Wave: https://jarv.is/notes/css-waving-hand-emoji/ -->
            <div class="wave emoji">&#x1F44B;</div>
            <h1 itemprop="name">I'm Lester Huang</h1>
            <h3>A lifelong learner &#x1F4D6; with a desire for adventure &#x1F30F;</h3>
        </div>
        <div class="contact last-element">
            <q-btn round icon="fab fa-linkedin-in" type="a" href="https://www.linkedin.com/in/lesterhuang/" target="_blank" size="1.1rem" unelevated />
            <q-btn round icon="far fa-envelope" type="a" href="mailto:huangl302d@gmail.com" target="_blank" size="1.1rem" unelevated />
            <q-btn round icon="fab fa-github" type="a" href="https://github.com/L23de" target="_blank" size="1.1rem" unelevated />
            <q-btn round icon="fab fa-instagram" type="a" href="https://www.instagram.com/lester.302d/" target="_blank" size="1.1rem" unelevated />
        </div>
    </div>
</template>

<style scoped lang="scss">
.wave {
    animation: wave-animation 2.5s infinite;
    transform-origin: 48px 48px;
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