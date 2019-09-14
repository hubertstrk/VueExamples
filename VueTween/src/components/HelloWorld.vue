<template>
  <div class="hello">

    <div class="slidecontainer">
      <input ref="slider" type="range" min="1" max="100" class="slider" id="range-slider">
    </div>
    <NumberTween :value="sliderValue" />
  </div>
</template>

<script>
import NumberTween from './NumberTween'

export default {
  name: 'HelloWorld',
  components: {
    NumberTween
  },
  data () {
    return {
      sliderValue: 50
    }
  },
  props: {
    msg: String
  },
  mounted () {
    this.$refs.slider.value = this.sliderValue

    this.$refs.slider.oninput = () => {
      this.sliderValue = this.$refs.slider.value
    }
  }
}
</script>

<style scoped>
</style>
