<template>
  <div class="login__view">
    <div class="container">
      <h1>Welcome</h1>
      <h4>Join today and enjoy access to great content</h4>
      <form method="post">
        <Input--Base
          @updateValue="(value) => (loginCredentials.username = value)"
          type="text"
          id="username"
          label="Username"
          autocomplete="false"
        />
        <Input--Base
          @updateValue="(value) => (loginCredentials.password = value)"
          type="password"
          id="password"
          label="Password"
          autocomplete="false"
        />
        <button @click.prevent="attemptLogin" type="submit">
          Log in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Joi from '@hapi/joi';
import InputBase from '../components/registration_base/Input_Base.vue';

const loginSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(50)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});

export default {
  components: {
    'Input--Base': InputBase,
  },
  data() {
    return {
      loginCredentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    attemptLogin() {
      if (this.loginCredentials.username && this.loginCredentials.password) {
        loginSchema
          .validateAsync(this.loginCredentials)
          .then((validatedCredentials) => {
            this.$store.dispatch('attemptLogin_ACTION', validatedCredentials);
          })
          .catch((err) => console.log(err));
      } else {
        console.log('All input fields required');
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/registration_form.styl';

.login__view {
  min-height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
