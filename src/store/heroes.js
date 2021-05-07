import {eventBus} from "@/main";

export default {
  state: {
    heroes: [
      {index: 0, level: 0, dmgMult: 4, costStart: 1, name: "Knight", image:"hero-right-1.png"},
      {index: 1, level: 0, dmgMult: 16, costStart: 15, name: "name2"},
      {index: 2, level: 0, dmgMult: 64, costStart: 150, name: "name3", image:"hero-left-1.png"},
      {index: 3, level: 0, dmgMult: 256, costStart: 1500, name: "name4", image:"hero-right-3.png"},
      {index: 4, level: -1},
      {index: 5, level: 0, dmgMult: 1024, costStart: 15000, name: "name5",  image:"hero-left-2.png"},
      {index: 6, level: 0, dmgMult: 4096, costStart: 150000, name: "name6", image:"hero-right-4.png"},
      {index: 7, level: 0, dmgMult: 16384, costStart: 1500000, name: "name7"},
      {index: 8, level: 0, dmgMult: 65536, costStart: 15000000, name: "name8",  image:"hero-left-3.png"},
    ],
  },
  getters: {
    fullDmg: (s) => {
      let dmg = 0;
      s.heroes.forEach((item) => {
        if (item.level && item.dmgMult) {
          dmg += item.level * item.dmgMult;
        }
      });
      return dmg;
    },
    heroes: (s) => s.heroes,
    heroesClear: (s) => {
      let newHeroes = [];
      s.heroes.forEach((item) => {
        if (item.level > -1) {
          item.money = item.costStart * ((item.level + 1) || 1);
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
    LEVEL_UP(state, heroData) {
      state.heroes.forEach((item) => {
        if (item.index === heroData.index) {
          item.level += heroData.level || 1;
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
      commit("LEVEL_UP", {index: levelUpData.index, level: levelUpData.level});
      commit("MONEY_OFF", levelUpData.money);
    },
  },
};
