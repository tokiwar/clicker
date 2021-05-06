<template>
  <div class="main-window-header">
    <span>Money: {{ this.heroMoney }}</span>
    <span>DPS: {{ this.fullDmg }}</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapGetters(["heroMoney", "fullDmg"]),
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
