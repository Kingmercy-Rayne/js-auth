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
          <label v-show="newUser.password.length >= 6" for="confirmpassword"
            >Confirm Password</label
          >
          <input
            :disabled="newUser.password.length < 6"
            v-show="newUser.password.length >= 6"
            v-model="newUser.confirmPassword"
            autocomplete="false"
            required
            type="password"
            name="password"
            id=""
          />
        </span>
        <button @click.prevent="attemptRegistration" type="submit">
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Joi from '@hapi/joi';

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
          const URL = 'http://localhost:1337/auth/register';
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
                .then((data) => console.log(data))
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
  padding: 1em 2.2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

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
