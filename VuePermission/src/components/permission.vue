<template>
  <div>
    <el-button v-can:entity.add="user" type="primary">Add Entity</el-button>
    <el-button v-can:entity.modify="user" type="success">Modify Entity</el-button>
    <el-button v-can:entity.delete="user" type="danger">Delete Entity</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          entity: {
            add: true,
            modify: true,
            delete: false
          }
        }
      }
    }
  }
</script>

<style lang="css" scoped>
</style>