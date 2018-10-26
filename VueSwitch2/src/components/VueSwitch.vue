<template>
  <span class="container">
    <span v-if="text" class="text">{{text}}</span>
    <label v-bind:style="{'background-color': color}" :class="{ switch: true, 'switch-small': small }">
      <input v-model="checked" type="checkbox" />
      <span :class="{ slider: true, 'slider-small': small, translate: checked, 'translate-small': checked && small }"></span>
    </label>
    <slot></slot>
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
      small: Boolean,
      text: String,
      success: Boolean,
      danger: Boolean
    },
    methods: {
      setColor () {
        if (!this.checked) {
          this.color = '#ccc'
        }
        else if (this.success) {
          this.color = '#35e87a'
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
      },
      value (value) {
        this.checked = value
      }
    },
    mounted () {
      this.checked = this.value
      this.setColor()
    }
  }
</script>

<style lang="css" scoped>
.container {
  display: flex;
  align-items: center;
}
.text {
  margin-right: 5px;
}
.switch {
  display: flex;
  align-items: center;
  height: 32px;
  width: 60px;
  border-radius: 100px;
  background-color: #ccc;
  transition: all .2s linear;
}
.switch-small {
  height: 20px;
  width: 36px;
}
.slider {
  height: 26px;
  width: 26px;
  margin-left: 3px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  transition: all .2s linear;
}
.slider-small {
  margin-left: 2px;
  height: 16px;
  width: 16px;
}
.translate {
  transform: translateX(28px);
}
.translate-small {
  transform: translateX(16px);
}
input {
  display: none;
}
</style>