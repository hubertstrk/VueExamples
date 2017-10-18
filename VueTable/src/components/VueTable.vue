<template>
  <div class="container">
    <div class="header">
      <input type="text" v-model="filterText" placeholder="Search...">
    </div>
    <table class="table">
      <tr>
        <th v-for="column in tableColumns" :key="column.name">{{column.name}}</th>
      </tr>
      <tr v-for="row in this.bins[selectedIndex]" :key="row.guid">
        <td v-for="column in tableColumns" :key="column.prop">{{ row[column.prop] }}</td>
      </tr>
    </table>
    <div class="footer">
      <div class="pagination">
        <div class="page" :class="{'pageLink': selectedIndex > 0}" @click.prevent="selectBin(selectedIndex-1)">Prev</div>
        <div class="page" :class="{'pageLink': selectedIndex !== i, 'pageActive': selectedIndex === i}" v-for="(n, i) in bins.length" @click.prevent="selectBin(i)" :key="i">{{n}}</div>
        <div class="page" :class="{'pageLink': selectedIndex < bins.length}" @click.prevent="selectBin(selectedIndex+1)">Next</div>
      </div>
      <div class="displaying">
        {{displaying}}
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'

export default {
  props: ['tableColumns', 'tableData'],
  data () {
    return {
      filterText: '',
      selectedIndex: 0,
      currStart: 0,
      bins: [],
      binSize: 10
    }
  },
  computed: {
    displaying () {
      const start = this.selectedIndex * this.binSize
      const end = start + this.binSize
      const sum = (this.bins.length - 1) * this.binSize + this.bins[this.bins.length - 1].length
      return `Displaying ${start} to ${end} of ${sum} items`
    }
  },
  methods: {
    filter (data) {
      if (this.filterText === '') {
        return data
      }
      const options = {
        threshold: 0.2,
        keys: [...this.tableColumns.map(x => x.prop)]
      }
      const fuse = new Fuse(data, options)
      return fuse.search(this.filterText)
    },
    dist: function () {
      if (!this.tableData) { return }
      this.bins = []
      this.selectedIndex = 0

      const copy = this.filter(this.tableData).slice()
      while (copy.length > 0) {
        const binItems = copy.splice(0, this.binSize) // items are nuked
        this.bins.push(binItems)
      }
    },
    selectBin (index) {
      if (index >= 0 && index < this.bins.length) {
        console.info(index)
        this.selectedIndex = index
      }
    }
  },
  watch: {
    tableData () {
      this.dist()
    },
    filterText () {
      this.dist()
    }
  },
  mounted () {
    this.dist()
  }
}
</script>

<style lang="css" scoped>
.table {
  overflow-x:auto;
}
.header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.footer {
  display: flex;
}
.displaying {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;  
}
input[type="text"] {
  outline: none;
  padding: 6px;
  border: solid 1px #ddd;
  font-style: italic;
  width: 200px;
}
.pagination {
  display: flex;
  margin: 15px 0px 15px 0;
}
.pagination div {
  padding: 8px;
}
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pageActive {
  background-color: rgb(0,50,150);
  color: white;
  border-radius: 15%;
}
.pageLink {
  color: rgb(100,100,100);
}
.pageLink:hover {
  color: rgb(0,50,150);
}
.page:hover {
  cursor: pointer;
}
.container {
  width: 100%;
}
table {
  border-collapse: collapse;
  width: 100%;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
tr:hover {
  background-color: #f0f0f0;
}
td {
  white-space: nowrap;
}
th, td {
  padding: 9px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
