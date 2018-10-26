<template>
  <div class="component">
    <div class="navigation">
      <button @click="setComponent('A')">A</button>
      <button @click="setComponent('B')">B</button>
    </div>
    <div class="main">
      <button @click="$store.commit('setLayout', 'TwoSided')">></button>
      <component v-bind:is="component"></component>
    </div>
  </div>
</template>

<script>
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default {
  components: {
    ComponentA,
    ComponentB
  },
  computed: {
    component () {
      return this.$store.state.oneSided.component
    }
  },
  methods: {
    setComponent (name) {
      this.$store.commit('setComponent', `component${name}`)
    }
  }
}
</script>

<style>
.component {
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 1000px;
  border: 1px solid #ddd;
}
.main {
  display: flex;
  height: 100%;
}
</style>
