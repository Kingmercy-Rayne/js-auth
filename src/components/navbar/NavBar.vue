<template>
  <nav class="nav">
    <ul>
      <li>Home</li>
      <li>Register</li>
      <li>Login</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped lang="stylus">
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
