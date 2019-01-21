<template>
  <div id="app">
    <h3>Vue Radial SVG</h3>
    <button @click="animate">Aminate</button>
    <div class="widget" :style="{height: containerLength, width: containerLength}">
      <svg class="svg" :style="{height: containerLength, width: containerLength}" shape-rendering="geometricPrecision">
        <path id="arc1" fill="none" stroke="rgb(220, 220, 220)" :stroke-width="6" 
          :d="path" stroke-linecap="round" 
        />
      </svg>
    </div>
  </div>
</template>

<script>

import anime from 'animejs'

export default {
  data () {
    return {
      length: 150,
      path: '',
      animation: null
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
    },
    animate () {
      const random = this.random(330, 90)
      this.path = this.arc(40, 30, random)

      if (!this.animation) {
        this.animation = anime({
          targets: '.widget path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'linear',
          duration: 1500,
          delay: function(el, i) { return i * 250 },
          // direction: 'alternate',
          loop: false,
          autoplay: false
        })
        this.animation.play()
      } else {
        this.animation.restart()
      }
    },
    random (max, min) {
      return Math.floor(Math.random() * (max - min + 1) + min)
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
    this.path = this.arc(40, 30, 330)
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
