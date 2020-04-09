<template>
  <div class="register__view">
    <div class="container">
      <h1>Welcome</h1>
      <h4>Join today and enjoy access to great content</h4>
      <form method="post">
        <span class="input--group">
          <label for="firstname">First Name</label>
          <input
            v-model="newUser.firstName"
            type="text"
            name="firstname"
            id=""
          />
        </span>
        <span class="input--group">
          <label for="email">Email</label>
          <input
            v-model="newUser.email"
            required
            type="email"
            name="email"
            id=""
          />
        </span>
        <span class="input--group">
          <label for="username">Username</label>
          <input
            v-model="newUser.username"
            required
            type="text"
            name="username"
            id=""
          />
        </span>
        <span class="input--group">
          <label for="password">Password</label>
          <input
            v-model="newUser.password"
            autocomplete="false"
            required
            type="password"
            name="password"
            id=""
          />
        </span>
        <span class="input--group">
          <label for="confirmpassword">Confirm Password</label>
          <input
            :disabled="newUser.password.length < 6"
            v-model="newUser.confirmPassword"
            autocomplete="false"
            required
            type="password"
            name="password"
            id=""
          />
        </span>
        <button type="submit">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        firstName: '',
        username: '',
        userClass: '',
        email: '',
        emailConfirm: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/registration_form.styl';

.register__view {
  min-height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: solid thin yellow;
}

.container {
  width: 45%;
  // border: solid thin var(--border-color-alt);
  padding: 1em 2.2em;

  > h1 {
    padding: 0.5em;
    position: relative;
  }

  >h1::before {
    content: '';
    border-bottom: solid thin var(--border-color-alt);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    padding: 1em;
    width: 2rem;
    height: 100%;
  }

  h4 {
    font-size: 0.8rem;
    padding: 1em;
    color: var(--text-color-tri);
  }

  button[type='submit'] {
    background: none;
    font-size: 1.2rem;
    color: var(--text-color-primary);
    background: var(--button-background-color);
    border: solid thin var(--border-color-alt);
    padding: 0.6em 3em;
    border-radius: 0.2rem;
  }
}
</style>
