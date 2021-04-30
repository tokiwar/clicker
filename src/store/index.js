import Vue from "vue";
import Vuex from "vuex";
import boss from "@/store/boss";
import h from "@/store/heroes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    boss,
    h,
  },
});
