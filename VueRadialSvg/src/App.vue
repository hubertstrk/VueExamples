<template>
  <div id="app">
    <h3>Vue Radial SVG</h3>
    <div class="widget" :style="{height: length + 'px', width: length + 'px'}">
      <svg class="widget" :style="{height: length + 'px', width: length + 'px'}">
        <path id="arc1" fill="none" stroke="#ffbb00" stroke-width="10px" 
          :d="arc(55, 0, 215)" />
        <path id="arc2" fill="none" stroke="#fb00ff" stroke-width="10px" 
          :d="arc(45, 0, 190)" />
        <path id="arc2" fill="none" stroke="#ffff00" stroke-width="10px" 
          :d="arc(35, 0, 175)" />
      </svg>
      <div class="geometrical">
        <p>95.35 ha</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      length: 200,
      strokeWidth: 15
    }
  },
  methods: {
    polarToCartesian (radius, degrees) {
      const radians = (degrees-90) * Math.PI / 180.0;
      return {
        x: this.center + (radius * Math.cos(radians)),
        y: this.center + (radius * Math.sin(radians))
      }
    },
    arc (radius, startAngle, endAngle) {
      const start = this.polarToCartesian(radius, endAngle)
      const end = this.polarToCartesian(radius, startAngle)
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
      const d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ")
      return d  
    }
  },
  computed: {
    center () {
      return this.length / 2
    }
  }
}
</script>

<style>
.app {
  padding: 0px;
}
.widget {
  border: 1px solid lightgray
}
.svg {
  border: 1px solid lightgrey;
}
.geometrical {
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>
