<template>
  <h1>Stores</h1>

  <div class="container">
    <h2>Local State</h2>

    <!-- You can edit/increment on the state directly -->
    <button @click="state.count++">count is: {{ state.count }}</button>
    
    <div>
      Value doubled <span>{{ doubled }}</span>
    </div>
    
    <!-- You can change the state value directly -->
    <button @click="state.count = state.count * 2">Double</button>
  </div>


  <div class="container">
    <h2>Global State</h2>
    
    <button>count is: {{ store.state.count }}</button>
    
    <div>
      Double the value <span>{{ store.getters.doubled }}</span>
    </div>
    <button @click="store.commit('decrement')">Decrement</button>
    <button @click="store.dispatch('double')">Double</button>
    <button @click="store.commit('increment')">Increment</button>
  </div>


  <div class="container">
    <h2>Math Store</h2>
    
    <button>count is: {{ store.state.math.total }}</button>
    
    <div>
      Double the value <span>{{ store.getters['math/doubled'] }}</span>
    </div>
    <button @click="store.commit('math/decrement')">Decrement</button>
    <button @click="store.commit('math/half')">Half</button>
    <button @click="store.dispatch('math/double')">Double</button>
    <button @click="store.commit('math/increment')">Increment</button>
  </div>
  
  <p>
    <a href="/">Example app</a>
  </p>
</template>

<script>
//import { defineProps, reactive, computed } from "vue";
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({ count: 0 });

    const doubled = computed(function () {
      return state.count * 2;
    });

    const store = useStore();

    return {
      doubled,
      state,
      store
    };
  }
};
</script>



<style scoped>
a {
  color: #ff0000;
}
.container {
  background: #fff;
  max-width: 400px;
  margin: 0 auto 1rem auto;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
