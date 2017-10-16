<template>
  <div class="app">
    <h2>Vue Radial</h2>
    <vue-radial :height="200" :width="200"></vue-radial>
  </div>
</template>

<script>
import VueRadial from './VueRadial.vue'

export default {
  name: 'app',
  components: {VueRadial}
}
</script>

<style lang="css" scoped>
.app {
  padding: 20px;
}
</style>
