// import axios from "axios";
import Cookies from "js-cookie";
import * as types from "../mutation-types";

export const state = {
  loginRes: null,
  USER_DATA: Cookies.get("USER_DATA"),
  USER_ACCESS_TOKEN: Cookies.get("USER_ACCESS_TOKEN")
};

// getters
export const getters = {
  loginRes: state => state.loginRes,
  USER_DATA: state => state.USER_DATA,
  USER_ACCESS_TOKEN: state => state.USER_ACCESS_TOKEN
};

// mutations
export const mutations = {
  [types.AUTH.AUTH_LOGIN](state, res) {
    state.loginRes = res.data;
    if (res.status === 200) {
      const data = res.data.data;
      state.USER_ACCESS_TOKEN = data.token;
      Cookies.set("USER_ACCESS_TOKEN", data.token, {
        expires: data.expires_in / 86400
      });
    }
  },

  [types.AUTH.FETCH_AUTH](state, res) {
    if (!res.error) {
      state.USER_DATA = res.data;
      Cookies.set("USER_DATA", res.data, {
        expires: res.data.expires_in / 86400
      });
    }
  },

  [types.AUTH.AUTH_LOGOUT](state, res) {
    if (!res.err) {
      Cookies.remove("USER_ACCESS_TOKEN");
      Cookies.remove("USER_DATA");
    }
  },

  [types.AUTH.AUTH_FORGOT_PASSWORD_REQUEST](state, res) {
    state.forgotRes = res;
  },

  [types.AUTH.AUTH_FORGOT_PASSWORD_RESET](state, res) {
    state.resetRes = res;
  }
};

// actions
export const actions = {
  // async login({ commit }, params) {
  //   // const response = await axios.post(route("user.login"), params);
  //   commit(types.AUTH.AUTH_LOGIN, response);
  // },

  // async fetchUser({ commit }) {
  //   // const response = await axios.get(route("user.my-info"));
  //   commit(types.AUTH.FETCH_AUTH, response);
  // },

  // async logout({ commit }) {
  //   // const response = await axios.post(route("user.logout"));
  //   commit(types.AUTH.AUTH_LOGOUT, response);
  // }
};
