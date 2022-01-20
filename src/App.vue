<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/me">About</router-link>
    <router-link to="/work">Experience</router-link>
    <router-link to="/interests">Interests</router-link>
  </nav>
  
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component">
      </component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

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

<style lang="scss">
@import '@/css/index.scss';

body {
  padding-top: #{1.1 * $navHeight};
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
  align-items: center;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  transition: transform 0.4s;

  
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
// Reference: https://www.youtube.com/watch?v=X4I6zUEM40A
.router-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in
}
</style>
