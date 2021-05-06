<template>
  <div class="heroes-container" :class="{ show: show }">
    <ul class="heroes-mult">
      <li :key="item.value" v-for="item in lvlMult" :class="{current: item.value === currentLvlMult}"
          :value="item.value" @click="setLevelMult">
        {{ item.text }}
      </li>
    </ul>
    <ul class="heroes-ul">
      <li :key="hero.index" v-for="hero in heroesClear" class="heroes-li">
        <a
            class="heroes-a"
            :id="hero.index"
            :class="{'not-avail' : (heroMoney < countMult(hero).result || countMult(hero).result < 1)}"
        >
          <span :class="{'not-avail' : (heroMoney < countMult(hero).result || countMult(hero).result < 1)}">{{
              hero.name
            }}</span>
        </a>
        <div class="level-up" :hero="countMult(hero).result"
             :class="{'not-avail' : (heroMoney < countMult(hero).result || countMult(hero).result < 1)}"
             @click="heroMoney >= countMult(hero).result && countMult(hero).result > 0 && levelUp({'index': hero.index, 'money':countMult(hero).result, 'level' : countMult(hero).heroLvl || currentLvlMult})">
          {{ beautifyNumbers(countMult(hero).result) || beautifyNumbers(hero.money) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from "@/main";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "HeroesContainer",
  created() {
    eventBus.$on("heroes", () => {
      this.show = !this.show;
    });
  },
  data: () => ({
    show: false,
    lvlMult: [{text: "x1", value: 1}, {text: "x10", value: 10}, {text: "x100", value: 100}, {text: "MAX", value: -1}],
    currentLvlMult: 1,
  }),
  computed: {
    ...mapGetters(["heroesClear", "heroMoney"]),
  },
  methods: {
    ...mapActions(["levelUp"]),
    setLevelMult() {
      this.currentLvlMult = event.target.value;
    },
    beautifyNumbers(number) {
      if (parseInt(number / 1000, 10) > 0) {
        let lastThree = number.toString().substr(number.toString().length - 3);
        if (lastThree === "000") {
          if (parseInt(number / 1000000, 10) > 0) {
            let lastSix = number.toString().substr(number.toString().length - 6);
            if (lastSix === "000000") {
              return number / 1000000 + 'KK';
            }
          }
          return number / 1000 + 'K';
        }
      }
      return number;
    },
    countMult(hero) {
      const level = hero.level;
      const costs = hero.costStart;
      let result = 0;
      let i = 0;
      if (this.currentLvlMult === 1) {
        result = costs * (level + 1);
      } else if (this.currentLvlMult > 1) {
        for (let k = 1; k <= this.currentLvlMult; k++) {
          result += costs * (level + k);
        }
      } else {
        i = 1;
        while (result < this.heroMoney) {
          result += costs * (level + i);
          i++;
        }
        if (i > 2) {
          result -= costs * (level + i - 1);
          i -= 2;
        } else {
          i = 1;
        }
      }
      return {result: result, heroLvl: i};
    }
  },
};
</script>

<style scoped>
.heroes-container {
  position: absolute;
  height: 480px;
  width: 480px;
  background: #66c3ff;
  right: 500px;
  top: 185px;
  display: none;
}

.heroes-mult {
  position: absolute;
  width: 480px;
  height: 50px;
  bottom: 480px;
  background: #1344a0;
  margin-block-end: 0;
  margin-block-start: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: solid #1344a0 4px;
  border-left: solid #1344a0 4px;
  border-right: solid #1344a0 4px;
}

.heroes-mult li {
  background: burlywood;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  cursor: pointer;
}

.heroes-mult li.current {
  font-size: 24px;
  font-weight: 500;
  opacity: 1;
}

.heroes-ul {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-block-end: 0;
  margin-block-start: 0;
}

.heroes-li {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: cornflowerblue;
  border-left: solid #1344a0 4px;
  border-right: solid #1344a0 4px;
  border-top: solid #1344a0 2px;
  border-bottom: solid #1344a0 2px;
}

.heroes-li:first-of-type {
  border-top: solid #1344a0 4px;
}

.heroes-li:last-of-type {
  border-bottom: solid #1344a0 4px;
}

.heroes-li a {
  color: black;
  width: 75%;
  display: flex;
  font-size: 20px;
  border-right: solid #1344a0 1px;
}

.heroes-li span {
  left: 25px;
  position: relative;
  display: flex;
  align-items: center;
}

.level-up {
  width: 25%;
  background: burlywood;
  cursor: pointer;
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-left: solid #1344a0 3px;
}

.show {
  display: block;
}

.not-avail {
  opacity: 0.25;
  cursor: default;
}
</style>
