<script setup>
</script>

<template>
    <div id="splash" class="pane">
        <div id="splash-text">
            <h1>👋 I'm Lester Huang</h1>
            <h5>A lifelong learner 📖 with a desire for adventure 🗺️</h5>
            <div id="splash-blurb">
                <p>When I was a kid (still am of sorts), I was very picky and scared to try new things (especially food), so to recoup all those lost experiences, I aspire to seek discomfort in every aspect of my life</p>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
#splash {
    background: #ffa86d;
    background-image: url('/images/cartoon.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 20rem;
    min-height: 50vh;
    
    #splash-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        margin-right: 20rem;

        #splash-blurb {
            width: 30rem;
        }
    
        h1 {
        margin-top: 10vh;
        margin-bottom: 2rem;
        }
    
        h5 {
            margin-top: 0;
            margin-bottom: 1rem;
        }
    }
}
</style>