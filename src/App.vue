<template>
  <div id="app">
    <nav class="nav">
      <ul>
        <li>Home</li>
        <li>Register</li>
        <li>Login</li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

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

.nav {
  width: 100%;
  display: flex;
  border: solid thin cyan;

  ul {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  li {
    cursor: pointer;
    display: flex;
    margin: 0 1em;
    padding: 1em;
  }
}
</style>
