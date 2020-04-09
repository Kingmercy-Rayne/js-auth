<template>
  <nav class="nav">
    <i @click="navigateView(homeRoute)" class="fa fas fa-instagram"></i>
    <ul>
      <li
        v-for="(item, index) in navRoutes"
        :key="index"
        @click="navigateView(item.route)"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      homeRoute: 'home',
      navRoutes: [
        { name: 'Sign Up', route: 'signup' },
        { name: 'Login', route: 'login' },
      ],
    };
  },
  methods: {
    navigateView(destination) {
      if (this.$route.name !== destination) {
        this.$router.push(destination).catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.nav {
  width: 100%;
  display: flex;

  > i {
    padding: 0.4em 2em;
    font-size: 2rem;
  }

  ul {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  li {
    color: var(--text-color-primary);
    cursor: pointer;
    display: flex;
    margin: 0.2em 1em;
    padding: 1.2em;
    position: relative;
    border: solid thin var(--border-color-alt);
    border-radius: 1em;
  }
}
</style>
