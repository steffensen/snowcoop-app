import Vue from 'vue'
import Vuex from 'vuex';
import AuthService from './services/auth.service';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
  },
  getters: {
    USER: state => {
      return state.user;
    },
    IS_LOGIN: state => {
      return !!state.token;
    }
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload;
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    }
  },
  actions: {
    LOG_IN: (context, payload) => {
      return AuthService.login(payload).then(async (payload) => {
        const { user, token } = payload;
        AuthService.storeToken(token);
        AuthService.setHeader(token);
        await context.commit('SET_TOKEN', token);

        AuthService.storeUser(user);
        await context.commit('SET_USER', user);
        return user;
      });
    },
  }
});

export default store;
