<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/swe">Work Experience</router-link>
  <router-link to="/interests">Personal Interests</router-link>
  <router-view></router-view>
</template>

<style lang="scss"> // Global SCSS definitions
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
