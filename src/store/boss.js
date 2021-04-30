export default {
  state: {
    level: 1,
    hp: 50,
  },
  getters: {
    hp: (s) => s.hp,
    level: (s) => s.level,
  },
  mutations: {
    TAKE_DMG(state, dmg) {
      state.hp -= dmg;
      if (state.hp < 1) {
        state.level++;
        state.hp = state.level * 50;
      }
    },
  },
  actions: {
    takeDmg({commit}, dmg) {
      commit("TAKE_DMG", dmg);
    },
  },
}