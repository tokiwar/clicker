<template>
  <div class="hero">
    <span>Level: {{ level }}</span>
    <span>Dmg: {{ dmg }}</span>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {eventBus} from "@/main";

export default {
  name: "HeroCard",
  props: ["heroIndex"],
  created() {
    eventBus.$on("levelUp" + this.heroIndex, () => {
      clearInterval(this.attackInterval);
      this.setFields(this.heroes);
      this.startAtk();
    });
  },
  data: () => ({
    level: null,
    dmg: null,
    dmgMult: 1,
    attackInterval: false,
    atkSpeed: 1000,
  }),
  methods: {
    ...mapActions(["takeDmg"]),
    setFields(heroes) {
      heroes.forEach((item) => {
        if (item.index === this.heroIndex) {
          this.level = item.level;
          this.dmgMult = item.dmgMult;
        }
      });
    },
    startAtk() {
      this.dmg = this.level * this.dmgMult;
      this.attackInterval = setInterval(() => {
        this.takeDmg(this.dmg);
      }, this.atkSpeed);
    }
  },
  computed: {
    ...mapGetters(["heroes"]),
  },
  mounted() {
    this.setFields(this.heroes);
    this.startAtk();
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
