<template>
  <div class="signup__view">
    <div class="container">
      <h1>Welcome</h1>
      <h4>Join today and enjoy access to great content</h4>
      <form method="post">
        <Input--Base
          @updateValue="(value) => (newUser.firstName = value)"
          type="text"
          id="firstName"
          label="First Name"
          autocomplete="true"
        />
        <Input--Base
          @updateValue="(value) => (newUser.email = value)"
          type="email"
          id="email"
          label="Email"
          autocomplete="true"
        />
        <Input--Base
          @updateValue="(value) => (newUser.username = value)"
          type="text"
          id="username"
          label="Username"
          autocomplete="true"
        />
        <Input--Base
          @updateValue="(value) => (newUser.password = value)"
          type="password"
          id="password"
          label="Password"
          autocomplete="false"
        />
        <Input--Base
          @updateValue="(value) => (newUser.confirmPassword = value)"
          type="password"
          id="confirmpassword"
          label="Confirm Password"
          autocomplete="false"
          v-if="newUser.password.length >= 6"
        />
        <button @click.prevent="attemptRegistration" type="submit">
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Joi from '@hapi/joi';
import InputBase from '../components/registration_base/Input_Base.vue';

const registerSchema = Joi.object().keys({
  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'co.uk', 'io', 'tech'],
    },
  }),
});

export default {
  components: {
    'Input--Base': InputBase,
  },
  data() {
    return {
      newUser: {
        firstName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    attemptRegistration() {
      const {
        firstName,
        username,
        email,
        password,
        confirmPassword,
      } = this.newUser;
      if (firstName && username && email && password && confirmPassword) {
        if (password === confirmPassword) {
          const URL = 'http://localhost:1337/auth/signup';
          const processedUserProfile = {
            firstName,
            username,
            email,
            password,
          };
          registerSchema
            .validateAsync(processedUserProfile)
            .then((validatedUser) => {
              fetch(URL, {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(validatedUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  localStorage.setItem('user', JSON.stringify(data.addedUser));
                  localStorage.setItem('token', data.token);
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        } else {
          console.log('Passwords do not match');
        }
      } else {
        console.log('all fields are required');
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/registration_form.styl';

.signup__view {
  min-height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: solid thin yellow;
}
</style>
