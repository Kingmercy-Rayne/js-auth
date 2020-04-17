<template>
  <div class="login__view">
    <div class="container">
      <h1>Welcome</h1>
      <h4>Join today and enjoy access to great content</h4>
      <form method="post">
        <Input--Base
          @updateValue="(value) => (loginCredentials.email = value)"
          type="email"
          id="email"
          label="Email"
          autocomplete="true"
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
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'co.uk', 'io', 'tech'],
    },
  }),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});

export default {
  components: {
    'Input--Base': InputBase,
  },
  data() {
    return {
      loginCredentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    attemptLogin() {
      if (this.loginCredentials.email && this.loginCredentials.password) {
        const URL = 'http://localhost:1337/auth/login';
        loginSchema
          .validateAsync(this.loginCredentials)
          .then((validatedCredentials) => {
            console.log('trying to send req');
            fetch(URL, {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(validatedCredentials),
            })
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
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
