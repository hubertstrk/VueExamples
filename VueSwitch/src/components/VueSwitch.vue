<template>
  <span>
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
      small: Boolean
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

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
  -webkit-transition: .2s;
  transition: .2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .2s;
  transition: .2s;
}

/* input:checked + .slider {
  background-color: #2196F3;
} */

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>