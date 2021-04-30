<template>
  <div class="skills-container" :class="{ show: show }"></div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "SkillsContainer",
  created() {
    eventBus.$on("skills", () => {
      this.show = !this.show;
    });
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
.skills-container {
  position: absolute;
  height: 480px;
  width: 480px;
  background: #66c3ff;
  left: 500px;
  top: 185px;
  display: none;
}

.show {
  display: block;
}
</style>
