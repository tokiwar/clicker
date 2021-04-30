<template>
  <div class="hero">
    <span>Level: {{ level }}</span>
    <span>Dmg: {{ dmg }}</span>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "HeroCard",
  props: ['heroIndex'],
  data: () => ({
    level: null,
    dmg: null,
    attackInterval: false,
    atkSpeed: 1000,
  }),
  methods: {
    ...mapActions(["takeDmg"]),
    setFields(heroes) {
      heroes.forEach((item) => {
        if (item.index === this.heroIndex) {
          this.level = item.level;
          this.dmg = item.dmg;
        }
      })
    }
  },
  computed: {
    ...mapGetters(['heroes']),
  },
  mounted() {
    this.setFields(this.heroes);
    this.attackInterval = setInterval(() => {
      this.takeDmg(this.dmg);
    }, this.atkSpeed);
  },
};
</script>

<style scoped>
.hero {
  width: 125px;
  height: 125px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
