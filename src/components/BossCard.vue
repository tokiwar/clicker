<template>
  <div class="boss">
    <div class="boss-bar">
      <div class="boss-hp-current" :style="{width: `${300 * hp / maxHp}px`}"></div>
      <div class="boss-hp"><span>{{ hp }}</span></div>
    </div>

    <img :src="require('@/assets/img/bosses/boss-' + this.bossType +'.png')" alt=""/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "BossCard",
  data: () => ({
  }),
  computed: {
    ...mapGetters(["hp", "level", "money", "maxHp", "bossType", "firstSkillStatus"]),
  },
};
</script>

<style scoped>
span {
  color: white;
}

.boss {
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.boss-bar {
  position: absolute;
  width: 480px;
  height: 100px;
  left: -165px;
  top: -249px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.boss-hp {
  width: 300px;
  height: 50px;
  background: #4d0000;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 30px;
}

.boss-hp span {
  z-index: 100000;
}

.boss-hp-current {
  background: #FF0000;
  width: 300px;
  height: 50px;
  justify-content: left;
  display: flex;
  font-size: 30px;
  position: absolute;
}
</style>
