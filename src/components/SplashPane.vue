<script setup>
</script>

<template>
    <div id="splash" class="pane">
        <h1>👋 I'm Lester Huang</h1>
        <h5>A lifelong learner 📖 with a desire for adventure 🗺️</h5>
        <div id="splash-blurb">
            <p>When I was a kid, I was very picky and scared to try new things (especially food), so to recoup all those lost experiences, I aspire to seek discomfort in every aspect of my life</p>
        </div>
    </div>
</template>


<style scoped lang="scss">
#splash {
    background: #ffa86d;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    #splash-blurb {
        width: 30rem;
    }

    h1 {
    margin-top: 15vh;
    margin-bottom: 2rem;
    }

    h5 {
        margin-top: 0;
        margin-bottom: 1rem;
    }
}
</style>