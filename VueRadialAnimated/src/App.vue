<template>
  <div id="app">
    <h3>Vue Radial SVG</h3>
    <button type="button" @click="animate">Animate</button>
    <div class="widget" :style="{height: containerLength, width: containerLength}">
      <svg class="svg" :style="{height: containerLength, width: containerLength}" shape-rendering="geometricPrecision">
        <path id="arc1" fill="none" stroke="rgba(255,0,0,0.6)" :stroke-width="strokeWidth" 
          :d="path" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: null,
      radius: 40,
      startAngle: 30,
      endAngle: 120,
      length: 150,
      strokeWidth: 8
    }
  },
  methods: {
    animate () {
      // document.querySelector('#arc1').classList.remove('path')
      // this.$nextTick(() => {
      //   document.querySelector('#arc1').classList.add('path')
      //   this.endAngle += 10
      //   this.arc()
      // })
      while (this.endAngle < 330) {
        this.endAngle += 0.001
        this.arc()
      }
    },
    polarToCartesian (radius, degrees) {
      const radians = (degrees - 90) * Math.PI / 180.0;
      return {
        x: this.center + (radius * Math.cos(radians)),
        y: this.center + (radius * Math.sin(radians))
      }
    },
    arc () {
      const start = this.polarToCartesian(this.radius, this.endAngle)
      const end = this.polarToCartesian(this.radius, this.startAngle)
      const largeArcFlag = this.endAngle - this.startAngle <= 180 ? "0" : "1"
      const d = [
        "M", start.x, start.y, 
        "A", this.radius, this.radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(" ")
      this.path = d  
    }
  },
  computed: {
    center () {
      return this.length / 2
    },
    containerLength () {
      return this.length + 'px'
    }
  },
  mounted () {
    this.arc()
  }
}
</script>

<style>
.path {
  stroke-dasharray: 320;
  stroke-dashoffset: 320;
  animation: dash 1s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.app {
  padding: 0px;
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
