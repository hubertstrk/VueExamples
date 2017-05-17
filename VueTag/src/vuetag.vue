<template lang="html">
  <div class="selectContainer">
    <input type="text" ref='select' multiple placeholder="add tag..."></input>
  </div>
</template>

<script>

export default {
  methods: {
    addItems: function() {
      this.selectize.addItem('test', true)
    }
  },
  computed: {
    selectize: function() {
      const select = $(this.$refs.select)
      return select[0].selectize
    }
  },
  mounted: function() {
    const $select = $(this.$refs.select)
    $select.selectize({
      plugins: ['remove_button','restore_on_backspace'],
      delimiter: ',',
      persist: false,
      create: function(input) {
        return {
          value: input,
          text: input
        }
      }
    })

    this.selectize.on('item_add', (item) => {
      this.$emit('added', item)
    })

    this.selectize.on('item_remove', (item) => {
      this.$emit('removed', item)
    })
  } 
}

</script>

<style lang="css" scoped>
.selectContainer input{
  width: 300px;
}
</style>