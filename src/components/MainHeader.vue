<template>
  <div class="main-window-header">
    <span>Boss: {{ this.level }}</span>
    <span>Hero: {{ this.heroLevel }}</span>
    <span>Money: {{ this.heroMoney }}</span>
    <span>DPS: {{ this.fullDmg }}</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapGetters(["heroMoney", "fullDmg", "level", "heroLevel"]),
  },
};
</script>

<style scoped>
.main-window-header {
  height: 100px;
  width: 100%;
  background: #66c3ff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 25px;
}
</style>
