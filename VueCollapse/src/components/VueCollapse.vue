<template>
  <div class="collapse-panel">
    <div class="collapse-panel-header">
      <div class="header-icon">
        <i class="fa fa-angle-right rotating" :class="{'rotating-out': collapsed, 'rotating-in': !collapsed}" aria-hidden="true"></i>
      </div>
      <div class="header-title">
        <a href="#" @click.prevent="collapsed = !collapsed">{{title}}</a>
      </div>
    </div>
    <div>
    <transition name="fade">
      <div v-show="!collapsed" class="collapse-panel-body">
        <slot></slot>
      </div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      collapsed: true
    }
  }
}
</script>

<style lang="css" scoped>
.collapse-panel {
  display: flex;
  flex-direction: column;
}
.collapse-panel-header {
  display: flex; 
  flex-direction: row;
  padding: 6px;
  height: 32px;
  border: 1px solid lightgrey;
}
.header-title {
  display: flex; 
  align-items: center;
}
.header-icon {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  margin-top: 2px; 
  margin-right:5px; 
  width: 15px;
}
.collapse-panel-body {
  padding: 6px;
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
}
.fade-enter-active {
  animation: bounce-in .4s;
}
.fade-leave-active {
  animation: bounce-in .4s reverse;
}
@keyframes bounce-in {
  0% {
    /* transform: scale(0); */
    transform: translate(300px);
    opacity: 0;
  }
  100% {
    /* transform: scale(1); */
    opacity: 1;
  }
}
.rotating-out {
  transition: transform .4s ease-in-out;
  transform: rotateZ(0deg);
}

.rotating-in {
  transition: transform .4s ease-in-out;
  transform: rotateZ(90deg);
}
</style>
