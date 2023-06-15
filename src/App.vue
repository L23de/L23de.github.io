<template>
    <div class="page-container">
        <header class="header">
            <nav class="nav">
                <router-link to="/">Home</router-link>
                <router-link to="/me">About</router-link>
                <router-link to="/work">Experience</router-link>
                <router-link to="/interests">Interests</router-link>
            </nav>
            <!-- <div id="hamburger">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="mobile-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/me">About</router-link>
          <router-link to="/work">Experience</router-link>
          <router-link to="/interests">Interests</router-link>
        </div>
      </div> -->
        </header>

        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"> </component>
            </transition>
        </router-view>

        <transition name="fade">
            <footer class="footer" v-if="!splashPage">
                <div class="contact center-flex">
                    <q-btn
                        round
                        icon="fab fa-linkedin-in"
                        type="a"
                        href="https://www.linkedin.com/in/lesterhuang/"
                        target="_blank"
                        size="0.8rem"
                        unelevated
                    />
                    <q-btn
                        round
                        icon="far fa-envelope"
                        type="a"
                        href="mailto:huangl302d@gmail.com"
                        target="_blank"
                        size="0.8rem"
                        unelevated
                    />
                    <q-btn
                        round
                        icon="fab fa-github"
                        type="a"
                        href="https://github.com/L23de"
                        target="_blank"
                        size="0.8rem"
                        unelevated
                    />
                    <q-btn
                        round
                        icon="fab fa-instagram"
                        type="a"
                        href="https://www.instagram.com/lester.302d/"
                        target="_blank"
                        size="0.8rem"
                        unelevated
                    />
                    <q-btn
                        round
                        icon="far fa-calendar"
                        type="a"
                        href="https://calendly.com/huangl302d/30min"
                        target="_blank"
                        size="0.8rem"
                        unelevated
                    />
                </div>
                <a
                    href="https://github.com/L23de/l23de.github.io"
                    target="_blank"
                    class="foot-copy"
                    >&copy;
                    {{ year }}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Lester
                    Huang</a
                >
            </footer>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineComponent } from 'vue';

const year = new Date().getFullYear();

onMounted(() => {
    const nav: Element = document.querySelector('.nav')!;
    let lastScrollY: number = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY > 30 && lastScrollY < window.scrollY) {
            // User scrolled down
            nav.classList.add('nav--hidden');
        } else {
            // User scrolled back up
            nav.classList.remove('nav--hidden');
        }
        lastScrollY = window.scrollY;
    });
});
</script>

<script lang="ts">
export default defineComponent({
    computed: {
        splashPage(): boolean {
            return this.$route.path == '/';
        },
    },
});
</script>

<style lang="scss">
@import '@/css/index.scss';

.foot-copy {
    color: black;
    display: block;
    text-align: center;
    margin-bottom: 10px;
}

// Nav Interactions
// Scroll Hide: https://www.youtube.com/watch?v=Q_XZk5Vnujw
// Hover Underline: https://www.youtube.com/watch?v=aswRKAjjWuE
.nav {
    position: fixed;
    height: $navHeight;
    width: 100%;
    top: 0;
    left: 0;
    background: $primary;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s;
    z-index: 10; // Makes nav appear on top of everything
    gap: 1rem;

    a {
        position: relative;
        font-size: 1.2rem;
        color: black;
        text-decoration: none;
    }

    a:after {
        content: '';
        position: absolute;
        background-color: $links;
        height: 0.2rem;
        width: 0;
        left: 0;
        bottom: -0.2rem;
        transition: 0.3s;
    }

    a:hover {
        color: $links;
    }

    a:hover:after {
        width: 100%;
    }

    .router-link-active {
        color: $links;

        &:after {
            content: '';
            position: absolute;
            background-color: $links;
            height: 0.2rem;
            width: 100%;
            left: 0;
            bottom: -0.2rem;
            transition: 0.1s;
        }
    }
}

.nav--hidden {
    transform: translateY(#{-1 * $navHeight});
}

// Router Transitions
// Reference: https://learnvue.co/2021/01/4-awesome-examples-of-vue-router-transitions/#-1-fade-vue-router-transitions
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
