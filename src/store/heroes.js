import {eventBus} from "@/main";

export default {
  state: {
    heroes: [
      {index: 0, level: 0, dmgMult: 1, costStart: 1, name: "name1"},
      {index: 1, level: 0, dmgMult: 3, costStart: 10, name: "name2"},
      {index: 2, level: 0, dmgMult: 9, costStart: 100, name: "name3"},
      {index: 3, level: 0, dmgMult: 27, costStart: 1000, name: "name4"},
      {index: 4, level: -1},
      {index: 5, level: 0, dmgMult: 81, costStart: 10000, name: "name5"},
      {index: 6, level: 0, dmgMult: 243, costStart: 100000, name: "name6"},
      {index: 7, level: 0, dmgMult: 696, costStart: 1000000, name: "name7"},
      {index: 8, level: 0, dmgMult: 2088, costStart: 10000000, name: "name8"},
    ],
  },
  getters: {
    heroes: (s) => s.heroes,
    heroesClear: (s) => {
      let newHeroes = [];
      s.heroes.forEach((item) => {
        if (item.level > -1) {
          item.money = item.costStart * (item.level || 1);
          newHeroes.push(item);
        }
      });
      return newHeroes;
    },
  },
  mutations: {
    SET_HEROES(state, heroes) {
      state.heroes = heroes;
    },
    LEVEL_UP(state, heroIndex) {
      state.heroes.forEach((item) => {
        if (item.index === heroIndex) {
          item.level += 1;
          eventBus.$emit("levelUp" + item.index);
        }
      });
    },
  },
  actions: {
    setHeroes({commit}, heroes) {
      commit("SET_HEROES", heroes);
    },
    levelUp({commit}, levelUpData) {
      commit("LEVEL_UP", levelUpData.index);
      commit("MONEY_OFF", levelUpData.money);
    },
  },
};
