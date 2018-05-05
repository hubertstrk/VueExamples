<template>
  <div>    
    <h1>{{ msg }}</h1>
    <vue-switch v-model="checked1" />
    <br>
    <vue-switch v-model="checked2" success />
    <br>
    <vue-switch v-model="checked3" danger />
    <br>
    <vue-switch v-model="checked4" small />
    <br>
    <vue-switch v-model="checked5" small success />
    <br>
    <vue-switch text="asdfasdf" v-model="checked6" small danger>
      
    </vue-switch>

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
      checked1: true,
      checked2: true,
      checked3: false,
      checked4: true,
      checked5: false,
      checked6: true
    }
  },
  mounted () {
  },
  components: {VueSwitch}
}
</script>

<style lang="css" scoped>

</style>
