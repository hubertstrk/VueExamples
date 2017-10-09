<template>
  <div style="width: 600px">
    <div class="panel-group">
      <div class="panel panel-default">
        <div class="panel-heading">
          <div style="display: flex; flex-direction: row">
            <div style="display: flex; flex-direction: column; align-items: center; margin-top: 2px; width: 15px" >
              <i class="fa" :class="collapsed ? 'fa-angle-right' : 'fa-angle-down'" aria-hidden="true"></i>
            </div>
            <div style="display: flex; align-items: center">
              <a href="#" @click.prevent="collapsed = !collapsed">Filter</a>
            </div>
          </div>
        </div>
        <div class="panel-collapse" :class="collapsed ? 'panel-collapsed' : 'panel-expanded'">
          <div style="padding: 10px;">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: true
    }
  }
}
</script>

<style lang="css" scoped>
.panel-collapsed {
  display: none;
}
.panel-expanded {
  display: block;
}
.panel-heading {
  padding: 5px 5px !important;
}
</style>
