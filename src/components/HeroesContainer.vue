<template>
  <div class="heroes-container" :class="{ show: show }">
    <ul class="heroes-ul">
      <li :key="hero.id" v-for="hero in heroesList" class="heroes-li">
        <a class="heroes-a"
           :id="hero.id"
           @click.prevent="setHeroes(getCurrentHeroArray(hero.id))"
        >
          {{ hero.name }}
        </a>
        <div class="level-up"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from "@/main";
import {mapActions} from "vuex";

export default {
  name: "HeroesContainer",
  created() {
    eventBus.$on("heroes", () => {
      this.show = !this.show;
    });
  },
  data: () => ({
    show: false,
    heroesList: [
      {id: 1, name: "name1"},
      {id: 2, name: "name2"},
    ],
  }),
  methods: {
    ...mapActions(["setHeroes"]),
    getCurrentHeroArray(id) {
      let heroCurrent = [...this.$store.getters.heroes];
      heroCurrent[id - 1].level = 1;
      return heroCurrent;
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

.heroes-ul {
  height: 100%;
  width: 100%;
}

.heroes-li {
  width: 100%;
  height: 50px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

.level-up {
  width: 50px;
  background: burlywood;
  cursor: pointer;
}

.show {
  display: block;
}
</style>
