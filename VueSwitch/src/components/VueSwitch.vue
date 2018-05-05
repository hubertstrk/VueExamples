<template>
  <span class="container">
    <span v-if="text" class="text">{{text}}</span>
    <label class="switch">
      <input v-model="checked" type="checkbox" />
      <span class="slider round" v-bind:style="{'background-color': color}"></span>
    </label>
  </span>
</template>

<script>
  export default {
    data () {
      return {
        checked: false,
        color: '#ccc'
      }
    },
    props: {
      value: Boolean,
      success: Boolean,
      neutral: Boolean,
      danger: Boolean,
      small: Boolean,
      text: String
    },
    methods: {
      setColor () {
        if (!this.checked) {
          this.color = '#ccc'
        }
        else if (this.success) {
          this.color = '#35e87a'
        }
        else if (this.neutral) {
          this.color = '#2196F3'
        }
        else if (this.danger) {
          this.color = '#ff0000'
        }
        else {
          this.color = '#2196F3'
        }
      }
    },
    watch: {
      checked (value) {
        this.$emit('input', value)
        this.setColor()
      }
    },
    mounted () {
      this.checked = this.value
      this.setColor()
    }
  }
</script>

<style lang="css" scoped>
/* https://www.w3schools.com/howto/howto_css_switch.asp */

.container {
  display: flex; 
  align-items: center;
}

.text {
  margin-right: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .6s;
  transition: .6s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

.slider.round {
  border-radius: 12px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>