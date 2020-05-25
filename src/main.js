import Vue from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";

Vue.config.productionTip = false;

// 是否使用Mock
const ISMOCK = true;
if (ISMOCK) {
  require("./mock/index");
}

// axios.defaults.baseURL = '/api'
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
