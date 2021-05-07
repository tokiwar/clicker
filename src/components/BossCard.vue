<template>
  <div class="boss">
    <div class="boss-bar-top">
      <div class="boss-hp-current" :style="{width: `${300 * hp / maxHp}px`}"></div>
      <div class="boss-hp"><span>{{ hp }}</span></div>
    </div>
    <div class="boss-bar-bottom">
      <div class="boss-exp-current" :style="{width: `${300 * heroExp / heroTopExp}px`}"></div>
      <div class="boss-exp"><span>{{ heroExp }}</span></div>
    </div>
    <img :src="require('@/assets/img/bosses/boss-' + this.bossType +'.png')" alt=""/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "BossCard",
  data: () => ({}),
  computed: {
    ...mapGetters(["hp", "level", "money", "maxHp", "bossType", "heroTopExp", "heroExp", "heroLevel"]),
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

.boss img{
  height: 175px;
  width: 175px;
}

.boss-bar-top {
  position: absolute;
  width: 480px;
  height: 100px;
  left: -75px;
  top: -249px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.boss-bar-bottom {
  position: absolute;
  width: 480px;
  height: 100px;
  left: -75px;
  display: flex;
  bottom: -249px;
  justify-content: center;
  flex-direction: column;
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

.boss-exp {
  width: 300px;
  height: 50px;
  background: #4d0000;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 30px;
}

.boss-hp span,
.boss-exp span {
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

.boss-exp-current {
  background: #66cc00;
  width: 300px;
  height: 50px;
  justify-content: left;
  display: flex;
  font-size: 30px;
  position: absolute;
}
</style>
