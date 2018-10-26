<template>
  <div id="app">
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import OneSided from './components/OneSided'
import TwoSided from './components/TwoSided'

export default {
  name: 'App',
  components: {
    OneSided,
    TwoSided
  },
  computed: {
    layout () {
      return this.$store.state.layout
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app > * {margin-bottom: 10px;}
</style>
