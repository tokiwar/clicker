import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;
export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
