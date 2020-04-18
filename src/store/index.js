import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const localUrl = 'http://localhost:1337';

export default new Vuex.Store({
  state: {
    user: {
      _id: '',
      username: '',
      email: '',
    },
  },
  mutations: {
    updateStore_UserData_MUTA(state, payload) {
      console.log(payload);
    },
  },
  actions: {
    attemptLogin_ACTION({ commit }, payload) {
      fetch(`${localUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          commit('updateStore_UserData_MUTA', data);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
