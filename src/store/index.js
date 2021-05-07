import Vue from "vue";
import Vuex from "vuex";
import boss from "@/store/boss";
import h from "@/store/heroes";
import skills from "@/store/skills";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    boss,
    h,
    skills
  },
});
