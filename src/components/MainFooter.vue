<template>
  <div class="main-window-footer">
    <div class="container-button" @click="openHeroes"></div>
    <div class="container-button" @click="openSkills"></div>
  </div>
</template>

<script>
import { eventBus } from "@/main";

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
  background: red;
  width: 108px;
  cursor: pointer;
}
</style>
