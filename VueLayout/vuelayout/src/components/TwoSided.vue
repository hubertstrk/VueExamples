<template>
  <div class="component">
    <div class="navigation">
      <button @click="setComponent(['A', 'B'])">AB</button>
      <button @click="setComponent(['B', 'A'])">BA</button>
      <button @click="setComponent(['A', 'A'])">AA</button>
      <button @click="setComponent(['B', 'B'])">BB</button>
    </div>
    <div class="main">
      <div class="two-sided-container">
        <component v-bind:is="left"></component>
      </div>
      <button @click="$store.commit('setLayout', 'OneSided')">></button>
      <div class="two-sided-container">
        <component v-bind:is="right"></component>
      </div>
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
    left () {
      return this.$store.state.twoSided.leftComponent
    },
    right () {
      return this.$store.state.twoSided.rightComponent
    }
  },
  methods: {
    setComponent (names) {
      this.$store.commit('setRightComponent', `component${names[0]}`)
      this.$store.commit('setLeftComponent', `component${names[1]}`)
    }
  }
}
</script>

<style lang="css" scoped>
.main {
  display: flex;
  height: 100%;
}

.two-sided-container {
  width: 500px;
  border: 1px solid #ddd;
}
</style>
