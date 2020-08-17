import axios from "./axios";
import { toast, confirm } from "@/utils/User/ui";

export default {
  install(Vue) {
    //global directive
    Vue.directive("focus", {
      // When the bound element is inserted into the DOM...
      inserted: function(el) {
        // Focus the element
        el.focus();
      }
    });

    //global prototype
    Vue.prototype.$axios = axios;
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$toast = toast;
  }
};
