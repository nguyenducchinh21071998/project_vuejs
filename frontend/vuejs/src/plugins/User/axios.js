import axios from "axios";
import store from "@/store/User";
import Vue from "vue";
import Cookie from "js-cookie";
import i18n from "../i18n";
// Request interceptor
axios.interceptors.request.use(
  request => {
    let token = store.getters["auth/USER_ACCESS_TOKEN"];
    if (token) {
      request.headers.common["Accept"] = "application/json";
      request.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const locale = null;
    if (locale) {
      request.headers.common["Accept-Language"] = locale;
    }

    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  error => {
    if (
      error.response.status === 401 &&
      error.response.data.error != undefined &&
      error.response.data.error.code == 4010 &&
      error.response.config.url.name != "user.login"
    ) {
      window.location = window.location.origin;
      Cookie.remove("USER_ACCESS_TOKEN");
      Cookie.remove("USER_DATA");

      return;
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const vm = new Vue({});
    let errorMessages = [];
    if (
      error.response.status !== 422 &&
      !!error.response.data &&
      !!error.response.data.error.message &&
      typeof error.response.data.error.message === "string"
    ) {
      if (error.response.data.error.code === "4015") {
        errorMessages[0] = ["4015"];
        errorMessages.forEach(errorMessage => {
          vm.$bvToast.toast(i18n.t(`error.${errorMessage}`), {
            title: "",
            noCloseButton: false,
            autoHideDelay: 2000,
            appendToast: true,
            toaster: "b-toaster-top-center",
            variant: "danger",
            noFade: false,
            solid: true
          });
        });
      } else {
        errorMessages[0] = ["other"];
        errorMessages.forEach(errorMessage => {
          vm.$bvToast.toast(i18n.t(`error.${errorMessage}`), {
            title: "",
            noCloseButton: false,
            autoHideDelay: 2000,
            appendToast: true,
            toaster: "b-toaster-top-center",
            variant: "danger",
            noFade: false,
            solid: true
          });
        });
      }
    } else if (
      error.response.status === 422 &&
      !!error.response.data &&
      !!error.response.data.error.message &&
      typeof error.response.data.error.message === "object"
    ) {
      let keyCodes;
      let labels = [];
      keyCodes = Object.values(error.response.data.error.message);
      labels = Object.keys(error.response.data.error.message);
      for (let key in keyCodes) {
        errorMessages[key] = {
          label: labels[key],
          content: i18n.t(`error.${keyCodes[key][0]}`)
        };
      }
      errorMessages.forEach(errorMessage => {
        vm.$bvToast.toast(
          `${errorMessage.label.toUpperCase()} ${errorMessage.content}`,
          {
            title: "",
            noCloseButton: false,
            autoHideDelay: 2000,
            appendToast: true,
            toaster: "b-toaster-top-center",
            variant: "danger",
            noFade: false,
            solid: true
          }
        );
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
