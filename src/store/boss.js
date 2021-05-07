export default {
  state: {
    level: 1,
    hp: 30,
    maxHp: 30,
    money: 1,
    heroMoney: 1,
    hpMult: 30,
    bossType: 1,
    moneyMult: 1,
    dmgMult: 1,
  },
  getters: {
    hp: (s) => s.hp,
    level: (s) => s.level,
    money: (s) => s.money,
    heroMoney: (s) => s.heroMoney,
    maxHp: (s) => s.maxHp,
    bossType: (s) => s.bossType,
    moneyMult: (s) => s.moneyMult,
    dmgMult: (s) => s.dmgMult,
  },
  mutations: {
    MONEY_OFF(state, money) {
      state.heroMoney -= parseInt(money, 10);
    },
    SET_MONEY_MULT(state, moneyMult) {
      state.moneyMult = moneyMult;
    },
    SET_DMG_MULT(state, dmgMult) {
      state.dmgMult = dmgMult;
    },
    TAKE_DMG(state, dmg) {
      state.hp -= (dmg * state.dmgMult);
      if (state.hp < 1) {
        state.heroMoney += (state.money * state.moneyMult);
        state.level++;
        state.hp = state.level * state.hpMult;
        state.hp += parseInt(state.hp / 100 * 75, 10);
        state.maxHp = state.hp;
        state.money = state.level;
        state.money += parseInt(state.money / 100 * 25, 10);
        state.bossType = Math.floor(Math.random() * 32) + 1;
      }
    },
  },
  actions: {
    moneyMult({commit}, mult) {
      commit("SET_MONEY_MULT", mult);
    },
    dmgMult({commit}, mult) {
      commit("SET_DMG_MULT", mult);
    },
    moneyOff({commit}, money) {
      commit("MONEY_OFF", money);
    },
    takeDmg({commit}, dmg) {
      commit("TAKE_DMG", dmg);
    },
  },
};
