<template>
    <div class="content-wrap">
        <h1 class="heading handshake">
            About Me <span class="emoji">&#x1F91D;</span>
        </h1>
        <div id="about-me" itemscope itemtype="https://schema.org/Person">
            <div id="about-me-content">
                <img
                    src="/logo.webp"
                    alt="Picture of Lester"
                    itemprop="image"
                />
                <p>Hi, I'm glad you stopped by!</p>
                <p>
                    Let me introduce myself. My name is Lester, an avid software
                    engineer and tech enthusiast. I've always been passionate
                    about technology, but my
                    <router-link to="/work">SWE Journey</router-link>
                    of making a career out of that only really began in 11th
                    grade when I took my first summer engineering course.
                </p>
                <p>
                    Overall, I'm constantly looking for ways to seek discomfort,
                    ways to push myself out of my comfort zone and expand my
                    worldview. As a kid, I was always very picky and scared to
                    try new things, so to recoup those lost experiences and
                    never lose out on another one, I strive to say
                    <a href="https://yestheory.com/" target="_blank">"Yes"</a>
                    to everything! Still interested? Learn more about my other
                    <router-link to="/interests">interests</router-link>.
                </p>

                <p>
                    Have something cool to share, a project that you'd like to
                    collaborate on, seeking a mentee or mentor, or just want to
                    chat? Book a meeting with me on
                    <a
                        href="https://calendly.com/huangl302d/30min"
                        target="_blank"
                        >Calendly</a
                    >
                    and I'd be happy to discuss!
                </p>
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

        @media (max-width: $breakpoint-lg) {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        @media (min-width: #{$breakpoint-lg + 1}) {
            float: right;
        }
    }
}
</style>
