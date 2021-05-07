<template>
  <div class="main-window-footer">
    <div class="container-button" @click="openHeroes"><img src="@/assets/img/system/heroes.png" alt=""/></div>
    <div class="container-button" @click="openSkills"><img src="@/assets/img/system/skills.png" alt=""/></div>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "MainFooter",
  methods: {
    openSkills() {
      eventBus.$emit("skills");
    },
    openHeroes() {
      eventBus.$emit("heroes");
    },
  },
};
</script>

<style scoped>
.main-window-footer {
  height: 100px;
  width: 100%;
  background: #66c3ff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.container-button {
  height: 100%;
  width: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: cornflowerblue;
  border: 4px solid #1344a0;
}

.container-button img {
  width: 85px;
  height: 85px;
}
</style>
