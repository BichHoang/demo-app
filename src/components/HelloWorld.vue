<template>
  <div class="hello">
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useStore from '../store';

export default defineComponent({
  setup() {
    const store = useStore();
    store.auth.actGetCurrentUserInfo()
    const currentUser = computed(() => store.auth.currentUser);
    console.log("getCurrentUser: ", store.auth.getCurrentUser)
    console.log("currentUser: ", currentUser)
    console.log("state currentUser: ", store.auth.currentUser)
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
