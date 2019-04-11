import Vue from 'vue'
import Vuex from 'vuex';
import AuthService from './services/auth.service';
import Axios from 'axios';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null || localStorage.getItem('token'),
    user: null || localStorage.getItem('user'),
    addressList: null,
  },
  getters: {
    USER: state => {
      return state.user;
    },
    IS_LOGIN: state => {
      return !!state.token;
    },
    // add name getter for the dashboard page
    USERNAME: state => {
      return state.user.firstName;
    },
    ADDRESS_LIST: state => {
      return state.addressList;
    }

  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload;
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    SET_ADDRESS_LIST: (state, payload) => {
      state.addressList = payload;
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

    REGISTER: (context, payload) => {
      return AuthService.register(payload).then(async (payload) => {
        const { user, token } = payload;
        AuthService.storeToken(token);
        AuthService.setHeader(token);
        await context.commit('SET_TOKEN', token);

        AuthService.storeUser(user);
        await context.commit('SET_USER', user);
        return user;
      });
    },
   GET_ADDRESS_LIST: (context) => {
      return Axios.get('http://localhost:3000/address')
        .then(async response => {
          if (response.status === 200 || response.status === 201) {
            const { payload } = response.data;
            await context.commit('SET_ADDRESS_LIST', payload);
            return payload;
          }
      });
    },
  }
});

export default store;