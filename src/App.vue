<template>
  <div class="page-container">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/me">About</router-link>
      <router-link to="/work">Experience</router-link>
      <router-link to="/interests">Interests</router-link>
    </nav>
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component">
        </component>
      </transition>
    </router-view>
    
    <footer class="footer">
      <div class="contact center" v-if="!splashPage">
          <q-btn round icon="fab fa-linkedin-in" type="a" href="https://www.linkedin.com/in/lesterhuang/" target="_blank" size="0.8rem" unelevated />
          <q-btn round icon="far fa-envelope" type="a" href="mailto:huangl302d@gmail.com" target="_blank" size="0.8rem" unelevated />
          <q-btn round icon="fab fa-github" type="a" href="https://github.com/L23de" target="_blank" size="0.8rem" unelevated />
          <q-btn round icon="fab fa-instagram" type="a" href="https://www.instagram.com/lester.302d/" target="_blank" size="0.8rem" unelevated />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

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
})
</script>

<script lang="ts">
export default {
  computed: {
    splashPage() {
      return this.$route.path == '/';
    }
  }
}
</script>

<style lang="scss">
@import '@/css/index.scss';

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
  overflow: auto;
  z-index: 10; // Makes nav appear on top of everything

  
  a {
    position: relative;
    font-size: 1.2rem;
    color: black;
    text-decoration: none;
    margin: 0 0.5rem;
  }

  a:after {
    content: "";
    position: absolute;
    background-color: white;
    height: 0.2rem;
    width: 0;
    left: 0;
    bottom: -0.2rem;
    transition: 0.3s;
  }

  a:hover {
    color: white;
  }

  a:hover:after {
    width: 100%;
  }
}

.nav--hidden {
  transform: translateY(#{-1 * $navHeight});
}


// Router Transitions
// Reference: https://learnvue.co/2021/01/4-awesome-examples-of-vue-router-transitions/#-1-fade-vue-router-transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
