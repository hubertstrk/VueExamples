<template>
  <div class="widget" :style="{height: height + 'px', width: width + 'px' }">
    <div class="outerCircle" 
      :style="{height: outerCircle.height + 'px', width: outerCircle.width + 'px', top: outerCircle.top + 'px', left: outerCircle.left + 'px', 
        'border-color': 'blue', 'border-style': 'solid', 'border-width': borderSize + 'px'}"></div>
    <div class="innerCircle" 
      :style="{height: innerCircle.height + 'px', width: innerCircle.width + 'px', top: innerCircle.top + 'px', left: innerCircle.left + 'px', 
        'border-color': 'red', 'border-style': 'solid', 'border-width': borderSize + 'px'}"></div>
  </div>
</template>

<script>
export default {
  props: ['height', 'width'],
  data () {
    return {
      factor: 0.6,
      borderSize: 10
    }
  },
  computed: {
    innerCircle () {
      const height = this.outerCircle.height - 2 * this.borderSize
      const top = (this.height / 2) - (height / 2) - (this.borderSize)
      return {height, width: height, top, left: top}
    },
    outerCircle () {
      const height = this.height * this.factor - this.borderSize
      const top = (this.height / 2) - (height / 2) - (this.borderSize)
      return {height, width: height, top, left: top}
    }
  }
}
</script>

<style lang="css" scoped>
.widget {
  position: relative;
  border: 1px solid lightgray;
}
.outerCircle {
  position: absolute;
  border-radius: 50%;
}
.innerCircle {
  position: absolute;
  border-radius: 50%;
}

/* pie {
    width: 5em;
    height: 5em;
    display: block;
    border-radius: 50%;
    background-color: rgb(0,0,255);
    border: 5px solid rgb(80,80,80);
    float: left;
    margin: 3em;
}

.ten {
    background-image:
        linear-gradient(126deg, transparent 50%, white 50%),
        linear-gradient(90deg, white 50%, transparent 50%);
} */

</style>



<!-- <pie class="ten"></pie> -->