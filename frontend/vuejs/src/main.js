import Vue from "vue";
import Meta from "vue-meta";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "@/router/User";
import store from "@/store/User";
import BootstrapVue from "bootstrap-vue";
import plugins from "@/plugins/User";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "@/lang/vee-validate.json";
import CoreUiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import i18n from "@/plugins/i18n";
import moment from "moment";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(CoreUiVue);
Vue.use(Meta);
Vue.use(plugins);

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});
import MainLayout from "@/components/User/MainLayout.vue";
import GuestLayout from "@/components/User/GuestLayout.vue";

Vue.component("MainLayout", MainLayout);
Vue.component("GuestLayout", GuestLayout);
import VueMask from "v-mask";
Vue.use(VueMask);
Vue.filter("formatDate", function(date) {
  if (!date) return "";
  let d = moment(date, "YYYY-MM-DD");
  return d.format("DD/MM/YYYY");
});
new Vue({
  i18n,
  router,
  store,
  icons,
  render: h => h(App)
}).$mount("#app");
