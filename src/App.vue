<template>
  <div id="app">
    <NavBar--Main />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue';

export default {
  components: {
    'NavBar--Main': NavBar,
  },
};
</script>

<style lang="stylus">
@import url('./assets/css/global.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  border: solid thin crimson;
}
</style>
