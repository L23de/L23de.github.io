<script setup>
import { QBtn } from 'quasar'
</script>

<template>
    <div id="hobbies" class="pane">
        <h2 class="header">My interests...</h2>
        <q-btn outline rounded label="Work In Progress" size="5rem" :ripple="false" />
    </div>
</template>


<style scoped lang="scss">
#hobbies {
    background: $accent;
    color: white;
}
</style>