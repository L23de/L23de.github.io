<template>
    <div class="content-wrap">
        <h1 class="heading handshake">About Me <span class="emoji">&#x1F91D;</span></h1>
        <div id="about-me" itemscope itemtype="https://schema.org/Person">
            <div id="about-me-content">
                <img src="/logo.webp" alt="Picture of Lester" itemprop="image"/>
                <p>Hi, I'm glad you stopped by!</p>
                <p>Let me introduce myself. My name is Lester and I am currently a rising senior at Lehigh University pursuing a B.S. in Computer Science, along with a Data Science Minor. I've always been interested in computing technologies, how they work, and their applications. However, I really only started delving into the nitty-gritty details in 11th grade. Stop by my <router-link to="/work">SWE Journey</router-link> to learn more!</p>
                <p>In terms of my personal life, I'm constantly looking for ways to seek discomfort, ways to push myself out of my comfort zone and expand my worldview. As a kid, I was always very picky and scared to try new things, so to recoup those lost experiences and never lose out on another one, I strive to say <a href="https://yestheory.com/" target="_blank">"Yes"</a> to everything! Still interested? Learn more about my other <router-link to="/interests">interests</router-link>.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#about-me {
    img {
        width: min(100%, 450px);
        height: auto;
        border-radius: 50%;
        margin: 0px 20px 15px 20px;

        @media (max-width: $breakpoint-sm) {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        @media (min-width: #{$breakpoint-sm + 1}) {
            float: right;
        }
    }
}
</style>