<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <ul class="nav">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/stores">Stores</router-link></li>
    <li><router-link to="/users">Users</router-link></li>
    <li><router-link to="/computed">Computed</router-link></li>
  </ul>
  
  
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>


</template>


<!-- -->
<script>

export default {
  //setup(props) {
  setup() {
    return {};
  }
};

</script>


<style>
  body {
    background: #eff4f4;
  }

  h2 {
    margin-block-start: 0;
  }

  .nav {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    padding-inline-start: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
