<template>
<div class="container">
  <div class="fab" :class="collapsed ? 'collapsed' : 'expanded'">
    <div class="fab-circle" @click="collapsed = !collapsed">
      <i :class="collapsed ? 'fas fa-expand-arrows-alt' : 'fas fa-arrows-alt'"></i>
    </div>
    <transition-group name="fade">
      <template v-if="!collapsed">
        <div key="tl" class="action action-tl">
          1
        </div>
        <div key="tr" class="action action-tr">
          2
        </div>
        <div key="bl" class="action-small action-bl">
          3
        </div>
        <div key="br" class="action-small action-br">
          4
        </div>
      </template>
    </transition-group>
  </div>
</div>

</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display:flex;
}
.collapsed {
  height: 0px;
  width: 0px;
  transition-delay: .5s; /* hack: wait until the fade out animation has finished */
}
.expanded {
  height: 60px;
  width: 320px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fab {
  font-size: 12px;
  position: absolute;
  /* height: 60px;
  width: 320px; */
}
.fab-circle { 
  position: absolute;
  top: 6px;
  left: 138px;
  height: 45px;
  width: 45px;
  border-radius: 45px;
  border: 1px solid #ddd;
  z-index: 100;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .4s ease;
}
.fab-circle:hover {
  background-color: rgb(236, 236, 236);
}

.action {
  height: 25px;
  width: 145px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.action-small {
  height: 25px;
  width: 125px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.action-tl {
  position: absolute;
  top: 0px;
  left: 0px;
}
.action-tr {
  position: absolute;
  top: 0px;
  right: 0px;
}
.action-bl {
  position: absolute;
  top: 35px;
  left: 20px;

}
.action-br {
  position: absolute;
  top: 35px;
  right: 20px;
}
</style>
