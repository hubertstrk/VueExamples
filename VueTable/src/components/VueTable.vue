<template>
  <div class="container">
    <input v-model="filterText" placeholder="Search...">
    <table>
      <tr>
        <th v-for="column in tableColumns" :key="column.name">{{column.name}}</th>
      </tr>
      <tr v-for="row in filtered" :key="row.guid">
        <td v-for="column in tableColumns">{{ row[column.prop] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Fuse from 'fuse.js'

export default {
  props: ['tableColumns', 'tableData'],
  data () {
    return {
      filterText: ''
    }
  },
  computed: {
    filtered () {
      if (this.filterText === '') {
        return this.tableData
      }
      const options = {
        threshold: 0.1,
        keys: [...this.tableColumns.map(x => x.prop)]
      }
      const fuse = new Fuse(this.tableData, options)
      return fuse.search(this.filterText)
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  overflow-x:auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
tr:hover {
  background-color: #f0f0f0;
}
td {
  white-space: nowrap;
}
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

</style>
