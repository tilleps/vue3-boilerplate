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
    <code>components/hello-world.vue</code> to test hot module replacement.
  </p>
  <p>
    <a href="/example/">Example app</a>
  </p>
</template>

<!--
<script setup>
import { defineProps, reactive } from "vue"

//let unusedVar;

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>
-->


<script>
//import { defineProps, reactive, useContext } from "vue"
import { reactive } from "vue";


export default {
  props: {
    msg: String
  },
  //setup(props, { emit }) {
  setup() {
    const state = reactive({ count: 0 });
    
    //const { slots, attrs } = useContext();
    
    //console.log(props);
    //console.log(emit);
    //console.log(state);

    return {
      state
    };
  },


  components: {
  }
};
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
