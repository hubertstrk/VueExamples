<template>

<div class="fab" :class="fabCollapsed ? 'collapsed' : 'expanded'">
  <div class="fab-circle" @click="fabCollapsed = !fabCollapsed">
    <i :class="fabCollapsed ? 'fas fa-expand-arrows-alt' : 'fas fa-arrows-alt'"></i>
  </div>
  <transition-group name="fade">
    <template v-if="!fabCollapsed">
      <div key="tl" class="box box-medium box-tl">
        1
      </div>
      <div key="tr" class="box box-medium box-tr">
        2
      </div>
      <div key="bl" class="box box-small box-bl" :class="{'bl-expanded': blExpanded}">
        <a href="#" @click.prevent="blExpanded = !blExpanded">Expand</a>
        <div v-if="blExpanded" class="bl-content">
          <a href="#">Some Text</a><br>
        </div>
      </div>
      <div key="br" class="box box-small box-br" :class="{'br-expanded': brExpanded}">
        <a href="#" @click.prevent="brExpanded = !brExpanded">Expand</a>
        <div v-if="brExpanded" class="br-content">
          <a href="#">Some Text</a><br>
        </div>
      </div>
    </template>
  </transition-group>
</div>

</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      fabCollapsed: false,
      brExpanded: false,
      blExpanded: false
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

/* action boxes fade effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fab {
  font-size: 12px;
  position: absolute;
}
.fab-circle {
  /* circle styling */
  position: absolute;
  top: 6px;
  left: 138px;
  height: 45px;
  width: 45px;
  border-radius: 45px;
  border: 1px solid #ddd;
  background-color: white;
  z-index: 100;
  /* icon positioning */
  display: flex; 
  align-items: center;
  justify-content: center;
  /* transition for hover effect */
  transition: all .4s ease; 
}
.fab-circle:hover {
  background-color: rgb(236, 236, 236);
}

.box {
  position: absolute;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.box-medium {
  height: 25px;
  width: 145px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.box-small {
  height: 25px;
  width: 125px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.box-tl {
  top: 0px;
  left: 0px;
}
.box-tr {
  top: 0px;
  right: 0px;
}
.box-bl {
  top: 35px;
  left: 20px;
  transition: all .4s ease;
}
.box-br {
  top: 35px;
  right: 20px;
  transition: all .4s ease;
}

.br-expanded {
  height: 100px;
}
.br-content {
  margin-top: 10px;
}

.bl-expanded {
  height: 50px;
}
.bl-content {
  margin-top: 10px;
}
</style>
