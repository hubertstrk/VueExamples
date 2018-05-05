<template>
  <div>
    <h1>{{ msg }}</h1>
    <vue-switch v-model="checked" small></vue-switch>
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
