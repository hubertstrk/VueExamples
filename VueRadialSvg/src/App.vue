<template>
  <div id="app">
    <h3>Vue Radial SVG</h3>
    <div class="widget" :style="{height: containerLength, width: containerLength}">
      <svg class="svg" :style="{height: containerLength, width: containerLength}" shape-rendering="geometricPrecision">
        <path id="arc1" fill="none" stroke="rgba(255,0,0,0.3)" :stroke-width="strokeWidth" 
          :d="arc(40, 210, 360)" />
        <path id="arc2" fill="none" stroke="blue" :stroke-width="strokeWidth"
          :d="arc(32, 30, 190)" />
        <path id="arc2" fill="none" stroke="magenta" :stroke-width="strokeWidth"
          :d="arc(26, 30, 320)" />
      </svg>
      <div class="numberContainer geometrical" :style="{height: containerLength, width: containerLength}">
        <div style="padding: 3px;">95.35 ha</div>
        <div style="">official</div>
      </div>
      <div class="numberContainer cultivated" :style="{height: containerLength, width: containerLength}">
        <div style="padding: 3px;">92.56 ha</div>
        <div style="">cultivated</div>
      </div>
      <div class="numberContainer offical" :style="{height: containerLength, width: containerLength}">
        <div style="padding: 3px;">89.13 ha</div>
        <div style="">geometrical</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      length: 150,
      strokeWidth: 8
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
    },
    containerLength () {
      return this.length + 'px'
    }
  }
}
</script>

<style>
.app {
  padding: 0px;
  font-family: 'Segoe UI';
}
.widget {
  position: relative;
  border: 1px solid lightgray;
}
.svg {
  border: 1px solid lightgrey;
}

.numberContainer {
  position: absolute;
  top: 0px; 
  left: 0px;
  display: flex;
  flex-direction: column;
}

.geometrical {
   justify-content: flex-end;
}
.cultivated {
   justify-content: flex-end;
}

.cultivated div {
  text-align: right;
}

.offical {
   justify-content: flex-start;
}
.offical div {
  text-align: right;
}

</style>
