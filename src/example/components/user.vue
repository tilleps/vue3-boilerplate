<template>
  <h1>User</h1>

  <!--
  <div v-if="loading">
    Loading...
  </div>

  <div v-if="error">
    Error
  </div>
  -->

  <pre>{{ entry }}</pre>


</template>


<script>
import { onMounted, ref, toRefs } from "vue";
import { useStore } from "vuex";


export default {
  props: {
    id: Number
  },
  setup(props) {

    const store = useStore();
    //const id = props.id;
    
    const { id } = toRefs(props);
    const entry = ref();


    onMounted(async function() {
      entry.value = await store.dispatch("users/fetchOneById", id);
    });


    return {
      entry: entry
    };
  }
};
</script>


<style scoped>
a {
  color: #ff0000;
}
pre {
  text-align: initial;
}
</style>
