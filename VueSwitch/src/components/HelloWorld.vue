<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue-switch v-model="checked" text="Foo / Bar" small success></vue-switch>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
