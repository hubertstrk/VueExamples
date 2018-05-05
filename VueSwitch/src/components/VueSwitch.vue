<template>
  <div>
    <label class="switch">
      <input v-model="checked" type="checkbox" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked: false
      }
    },
    props: {
      value: Boolean
    },
    watch: {
      checked (value) {
        this.$emit('input', value)
      }
    },
    mounted () {
      this.checked = this.value
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

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

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