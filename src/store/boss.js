export default {
  state: {
    level: 1,
    hp: 30,
    money: 1,
    heroMoney: 1,
    hpPoints: 75,
    bossType: 1,
    moneyMult: 1,
    dmgMult: 1,
    heroLevel: 1,
    heroExp: 0,
    heroTopExp: 5,
    hpMult: 1,
    maxHp: 30,
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
    heroLevel: (s) => s.heroLevel,
    heroExp: (s) => s.heroExp,
    heroTopExp: (s) => s.heroTopExp,
    hpMult: (s) => s.hpMult,
  },
  mutations: {
    SET_HP(state) {
      state.maxHp *= state.hpMult;
      state.maxHp = parseInt(state.maxHp, 10);
      state.hp *= state.hpMult;
      state.hp = parseInt(state.hp, 10);
    },
    MONEY_OFF(state, money) {
      state.heroMoney -= parseInt(money, 10);
    },
    SET_MONEY_MULT(state, moneyMult) {
      state.moneyMult = moneyMult;
    },
    SET_DMG_MULT(state, dmgMult) {
      state.dmgMult = dmgMult;
    },
    SET_HP_MULT(state, hpMult) {
      state.hpMult = hpMult;
    },
    TAKE_DMG(state, dmg) {
      state.hp -= (dmg * state.dmgMult);
      if (state.hp < 1) {
        state.heroExp++;
        if (state.heroExp > state.heroTopExp) {
          state.heroLevel++;
          state.heroExp = 0;
          state.heroTopExp *= 3;
        }
        state.heroMoney += (state.money * state.moneyMult);
        state.level++;
        state.hp = state.level * state.hpPoints;
        state.hp += parseInt(state.hp / 100 * 75, 10);
        state.hp *= state.hpMult;
        state.hp = parseInt(state.hp, 10);
        state.maxHp = state.hp;
        state.money = state.level;
        state.money += parseInt(state.money / 100 * 25, 10);
        state.bossType = Math.floor(Math.random() * 32) + 1;
      }
    },
  },
  actions: {
    setHp({commit}) {
      commit("SET_HP");
    },
    hpMult({commit}, mult) {
      commit("SET_HP_MULT", mult);
    },
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
