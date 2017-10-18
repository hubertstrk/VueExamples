<template>
  <div class="app">
    <h1>Vue Table </h1>
    <div style="width: 600px;">
      <vue-table :tableColumns="tableColumns" :tableData="personData"></vue-table>
    </div>
  </div>
</template>

<script>
import VueTable from './VueTable.vue'
import persons from '../data/persons.json'

export default {
  data () {
    return {
      tableColumns: [
        {name: 'Firstname', prop: 'first_name'},
        {name: 'Lastname', prop: 'last_name'},
        {name: 'Gender', prop: 'gender'},
        {name: 'City', prop: 'city'},
        {name: 'Email', prop: 'email'},
        {name: 'Phone', prop: 'phone'},
        {name: 'Latitude', prop: 'latitude'},
        {name: 'longitude', prop: 'longitude'},
        {name: 'University', prop: 'university'},
        {name: 'Credit Card #', prop: 'credit_card_number'}
      ]
    }
  },
  computed: {
    personData () {
      return persons
    }
  },
  components: {VueTable}
}
</script>

<style scoped>
.app {
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif;
  font-size: 11pt;
  padding: 20px;
}
</style>
