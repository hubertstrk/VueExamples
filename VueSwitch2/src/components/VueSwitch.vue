<template>
  <label class="switch">
    <input v-model="checked" type="checkbox" />
    <span :class="[{ translate: checked }]" class="slider"></span>
  </label>
</template>

<script>
  export default {
    data () {
      return {
        checked: false,
      }
    },
    props: {
      value: Boolean,
      small: Boolean
    },
    methods: {
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
.switch {
  display: flex;
  align-items: center;
  height: 22px;
  width: 38px;
  border-radius: 12px;
  background-color: #ccc;
}
.slider {
  height: 16px;
  width: 16px;
  margin-left: 3px;
  border-radius: 16px;
  background-color: rgb(255, 255, 255);
  transition: .4s;
}
.translate {
  transform: translateX(16px);
}
input {
  display: none;
}
</style>