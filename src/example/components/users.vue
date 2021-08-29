<template>
  <h1>Users</h1>

  <div v-if="isLoading">
    Loading...
  </div>

  <ul>
    <li v-for="entry in users" :key="entry.id">
      {{ entry.name }} <router-link :to="{ name: 'User', params: { id: entry.id }}">view</router-link>
    </li>
  </ul>

</template>


<script>
//import { computed, onMounted, ref } from "vue";
import { onMounted, ref } from "vue";
//import { mapActions, mapGetters, mapState } from "vuex";
import { useStore } from "vuex";

export default {
  //setup(props) {
  setup() {

    /*
    //  Generate a random user ID
    const randomId = ref(Math.random().toString(36).substring(3));

    //  Computed user-link
    const userLink = computed(function() {
      return `/user/${randomId.value}`;
    });
    */

    const store = useStore();

    //const users = computed(() => store.state.users.entries);


    const users = ref();
    const isLoading = ref(true);

    onMounted(async function() {
      users.value = await store.dispatch("users/fetchAll");
      isLoading.value = false;
    });

    return {
      //userLink,
      //randomId,
      isLoading,
      users
    };
  }
};
</script>


<style scoped>
a {
  color: #ff0000;
}
</style>
