<template>
  <div id="app">
    <div class="row">
      <div class="column">
        <div class="col-md-4">
          <h3>Tag Example</h3>
          <vue-tag @added="onItemAdded" @removed="onItemRemoved"></vue-tag>
          <pre>{{this.addedItems}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vuetag from './vuetag.vue'

export default {
  name: 'app',
  data () {
    return {
      items: []
    }
  },
  components: {
    'vue-tag': vuetag
  },
  methods: {
    onItemAdded: function(item) {
      this.items.push(item)
    },
    onItemRemoved: function(item) {
      const index = this.items.indexOf(item)
      this.items.splice(index,1)
    }
  },
  computed: {
    addedItems: function() {
      return this.items.map((i)=>{ return i })
    }
  }
}
</script>

<style>
#app {
  padding: 10px;
}
</style>
