<template>
  <div class="main-window">
    <SkillsContainer />
    <HeroesContainer />
    <MainHeader />
    <div class="desk">
      <template v-for="(hero, index) in heroes">
        <template v-if="hero.level > 0">
          <HeroCard :heroIndex="hero.index" :key="index" />
        </template>
        <template v-else-if="hero.level < 0">
          <BossCard :key="index" />
        </template>
        <template v-else>
          <EmptyCard :key="index" />
        </template>
      </template>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import HeroCard from "@/components/HeroCard";
import BossCard from "@/components/BossCard";
import SkillsContainer from "@/components/SkillsContainer";
import HeroesContainer from "@/components/HeroesContainer";
import EmptyCard from "@/components/EmptyCard";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    EmptyCard,
    HeroesContainer,
    SkillsContainer,
    BossCard,
    HeroCard,
    MainFooter,
    MainHeader,
  },
  data: () => ({
    money: 1,
  }),
  computed: {
    ...mapGetters(["heroes"]),
  },
  methods: {},
  mounted() {
  },
};
</script>
<style scoped>
.main-window {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
}

.desk {
  display: grid;
  place-items: center;
  position: relative;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}
</style>
