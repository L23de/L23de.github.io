<template>
  <nav class="navMenu">
    <router-link to="/">Home</router-link>
    <router-link to="/me">About Me</router-link>
    <router-link to="/work">Experience</router-link>
    <router-link to="/interests">Interests</router-link>
    <!-- <div class="dot"></div> -->
  </nav>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'

import { onMounted } from 'vue'

onMounted(() => {
  const navMenu: Element = document.querySelector('.navMenu')!;
  let lastScrollY: number = window.scrollY;

  window.addEventListener('scroll', () => {
    if (lastScrollY > 30 && lastScrollY < window.scrollY) {
      // User scrolled down
      navMenu.classList.add('navMenu--hidden');
    } else {
      // User scrolled back up
      navMenu.classList.remove('navMenu--hidden');
    }
    lastScrollY = window.scrollY;
  });
})
</script>

<style lang="scss">
@import '@/css/index.scss';

$navHeight: 60px;

body {
  padding-top: $navHeight;
}

// References:
// Scrolling down hide: https://www.youtube.com/watch?v=Q_XZk5Vnujw
.navMenu {
  position: fixed;
  height: $navHeight;
  width: 100%;
  top: 0;
  left: 0;
  background: $primary;
  display: flex;
  align-items: center;
  transition: transform 0.4s;
  margin-bottom: 5rem;
  
  a {
    color: white;
    text-decoration: none;
    margin: 0 0.5rem;
  }
}

.navMenu--hidden {
  transform: translateY(#{-1 * $navHeight});
}
</style>
