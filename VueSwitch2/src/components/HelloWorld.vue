<template>
  <div>
    <h1>{{ msg }}</h1>
    <vue-switch v-model="checked" text="Foo" success></vue-switch>
    <br>
    <vue-switch v-model="checked" text="Bar" small danger></vue-switch>
    <br>
    <vue-switch v-model="checked" text="Bar" small></vue-switch>
    <p>{{checked}}</p>
  </div>
</template>

<script>
import VueSwitch from './VueSwitch.vue'

export default {
  props: {
    msg: String
  },
  data () {
    return {
      checked: true
    }
  },
  components: {VueSwitch}
}
</script>

<style lang="css" scoped>

</style>
