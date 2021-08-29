<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/home.vue</code> to test hot module replacement
  </p>
  <p>
    <a href="/">Default app</a>
  </p>
</template>


<script>
//import { defineProps, reactive } from "vue";
import { reactive } from "vue";

export default {
  //setup(props) {
  setup() {

    const state = reactive({ count: 0 });

    return {
      msg: "Home",
      state
    };
  }
};
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
