<template>
  <div class="boss">
    <div class="boss-bar">
      <div class="boss-hp"></div>
    </div>
    <span>Level: {{ level }}</span>
    <span>Hp: {{ hp }}</span>
    <span>Money: {{ money }}</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "BossCard",
  data: () => ({
    money: 1,
  }),
  computed: {
    ...mapGetters(['hp']),
    ...mapGetters(['level']),
  }
};
</script>

<style scoped>
span {
  color: white;
}

.boss {
  width: 150px;
  height: 150px;
  background: black;
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
  height: 25px;
  background: red;
}
</style>
