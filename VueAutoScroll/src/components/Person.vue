<template>
  <div class="person" :id="person.id">
    <div class="first-name">{{person.first_name}} {{person.last_name}}</div>
    <div class="email">{{person.email}}</div>
    <div class="gender">{{person.gender}}</div>
  </div>
</template>

<script>
export default {
  props: {
    person: Object
  }
}
</script>

<style scoped>
.person {
  border: 1px solid rgba(80,80,80,0.1);
  padding: 10px;
}
.person:hover {
  background-color: rgba(80,80,80,0.1);
}
.first-name {
  font-size: 2rem;
}
.last-name {
  font-size: 1.4rem;
}
.email {
  font-size: 1rem;
}
.gender {
  font-size: 0.8rem;
}
</style>