export default {
  state: {
    level: 1,
    hp: 30,
    maxHp: 30,
    money: 1,
    heroMoney: 1,
    hpMult: 30,
  },
  getters: {
    hp: (s) => s.hp,
    level: (s) => s.level,
    money: (s) => s.money,
    heroMoney: (s) => s.heroMoney,
    maxHp: (s) => s.maxHp,
  },
  mutations: {
    MONEY_OFF(state, money) {
      state.heroMoney -= parseInt(money, 10);
    },
    TAKE_DMG(state, dmg) {
      state.hp -= dmg;
      if (state.hp < 1) {
        state.heroMoney += state.money;
        state.level++;
        state.hp = state.level * state.hpMult;
        state.hp += parseInt(state.hp / 100 * 50, 10);
        state.maxHp = state.hp;
        state.money = state.level;
        state.money += parseInt(state.money / 100 * 25, 10);
      }
    },
  },
  actions: {
    moneyOff({commit}, money) {
      commit("MONEY_OFF", money);
    },
    takeDmg({commit}, dmg) {
      commit("TAKE_DMG", dmg);
    },
  },
};
