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
  min-height: 100vh;
  color: var(--text-color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--primary-color);
}
</style>
