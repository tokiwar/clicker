export default {
  state: {
    heroes: [
      {index: 0, level: 0, dmg: 1},
      {index: 1, level: 0, dmg: 2},
      {index: 2, level: 0, dmg: 3},
      {index: 3, level: 0, dmg: 4},
      {index: 4, level: -1},
      {index: 5, level: 0, dmg: 5},
      {index: 6, level: 0, dmg: 6},
      {index: 7, level: 0, dmg: 7},
      {index: 8, level: 0, dmg: 8},
    ],
  },
  getters: {
    heroes: (s) => s.heroes,
  },
  mutations: {
    SET_HEROES(state, heroes) {
      state.heroes = heroes;
    },
  },
  actions: {
    setHeroes({commit}, heroes) {
      commit("SET_HEROES", heroes);
    },
  },
};
