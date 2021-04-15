<template>
  <p>{{userId}}</p>
</template>

<script>
export default {
  name: 'user-details',
  props: {
    userId: null
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