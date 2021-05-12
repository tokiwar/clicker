export default {
  state: {
    skills: [
      {
        "index": 0,
        "name": "Double money",
        "time": "60",
        "time_left": "60",
        "status": false,
        "callback": "doubleMoney",
        "cd_status": false,
        "cd": "180",
        "cd_left": "180",
      },
      {
        "index": 1,
        "name": "Double damage",
        "time": "60",
        "time_left": "60",
        "status": false,
        "callback": "doubleDamage",
        "cd_status": false,
        "cd": "180",
        "cd_left": "180",
      },
      {
        "index": 2,
        "name": "Drop boss HP",
        "time": "60",
        "time_left": "60",
        "status": false,
        "callback": "dropBossHp",
        "cd_status": false,
        "cd": "180",
        "cd_left": "180",
      }
    ]
  },
  getters: {
    skills: (s) => s.skills,
    cdSkills: (s) => {
      let result = [];
      s.skills.forEach((item) => {
        if (item.cd_status) {
          result.push(item.index);
        }
      });
      return result;
    },
    activeSkills: (s) => {
      let result = [];
      s.skills.forEach((item) => {
        if (item.status) {
          result.push(item.index);
        }
      });
      return result;
    },
  },
  mutations: {
    SET_CD_LEFT(state, skill) {
      state.skills.forEach((item) => {
        if (item.index === skill.index) {
          item.cd_left = skill.cd_left;
        }
      });
    },
    SET_CD(state, skill) {
      state.skills.forEach((item) => {
        if (item.index === skill.index) {
          item.cd_status = skill.cd_status;
        }
      });
    },
    SET_TIME_LEFT(state, skill) {
      state.skills.forEach((item) => {
        if (item.index === skill.index) {
          item.time_left = skill.time_left;
        }
      });
    },
    USE_SKILL(state, skill) {
      state.skills.forEach((item) => {
        if (item.index === skill.index) {
          item.status = skill.status;
        }
      });
    }
  },
  actions: {
    useSkill({commit}, skill) {
      commit("USE_SKILL", skill);
    },
    setCd({commit}, skill) {
      commit("SET_CD", skill);
    },
    setCdLeft({commit}, skill) {
      commit('SET_CD_LEFT', skill);
    },
    setTimeLeft({commit}, skill) {
      commit('SET_TIME_LEFT', skill);
    }
  }
}