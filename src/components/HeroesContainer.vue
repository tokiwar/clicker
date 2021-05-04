<template>
  <div class="heroes-container" :class="{ show: show }">
    <ul class="heroes-ul">
      <li :key="hero.index" v-for="hero in heroesClear" class="heroes-li"
          :class="{'not-avail' : heroMoney < hero.money}">
        <a
            class="heroes-a"
            :id="hero.index"
            @click.prevent="heroMoney >= hero.money && setHeroes(getCurrentHeroArray(hero.index))"
        >
          {{ hero.name }}
        </a>
        <div class="level-up"
             @click="heroMoney >= hero.money && levelUp({'index': hero.index, 'money':hero.money})"></div>
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
  }),
  computed: {
    ...mapGetters(["heroesClear", "heroMoney"]),
  },
  methods: {
    ...mapActions(["setHeroes", "levelUp"]),
    getCurrentHeroArray(id) {
      let heroCurrent = [...this.$store.getters.heroes];
      heroCurrent[id].level = 1;
      return heroCurrent;
    },
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

.heroes-ul {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.heroes-li {
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  background: cornflowerblue;
}

.heroes-li a {
  color: black;
}

.level-up {
  width: 50px;
  background: burlywood;
  cursor: pointer;
}

.show {
  display: block;
}

.not-avail {
  opacity: 0.25;
}
</style>
