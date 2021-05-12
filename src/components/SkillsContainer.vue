<template>
  <div class="skills-container" :class="{ show: show }">
    <ul class="skills-ul" :style="{height: `${skills.length * 60}px`}">
      <li :key="skill.index" v-for="skill in this.skills" class="skills-li"
          :style="{background: activeSkills.indexOf(skill.index) !== -1
          ? `linear-gradient(to right,  #32a852 ${skill.time_left / skill.time * 100}%, #e6e600 ${skill.time_left / skill.time * 100}%)`
          : [cdSkills.indexOf(skill.index) !== -1 ? `linear-gradient(to right,  #e6e600 ${skill.cd_left / skill.cd * 100}%, #6495ed ${skill.cd_left / skill.cd * 100}%)` : 'cornflowerblue']}"
          @click.prevent="cdSkills.indexOf(skill.index) === -1 && handleFunctionCall(skill.callback, $event)"
      >
        <a :id="skill.index">
          <span>{{ skill.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from "@/main";
import {mapActions, mapGetters} from "vuex";

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
  computed: {
    ...mapGetters(["skills", "activeSkills", "cdSkills"]),
  },
  methods: {
    ...mapActions(["useSkill", "moneyMult", "dmgMult", "setCd", "hpMult", "setHp", "setCdLeft", "setTimeLeft"]),
    handleFunctionCall(functionName, event) {
      this[functionName](event)
    },
    dropBossHp() {
      let status = false;
      let itemR = null;
      this.skills.forEach((item) => {
        if (item.callback === "dropBossHp" && !item.status) {
          status = true;
          itemR = item;
        }
      });
      if (status) {
        this.useSkill({"index": itemR.index, "status": true});
        this.hpMult(0.5);
        this.setHp();
        let time = itemR.time_left;
        let durationInterval = setInterval(() => {
          time -= 1;
          this.setTimeLeft({"index": itemR.index, "time_left": time});
        }, 1000);
        setTimeout(() => {
          clearInterval(durationInterval);
          this.useSkill({"index": itemR.index, "status": false});
          this.hpMult(1);
          this.setHp();
          this.setCd({"index": itemR.index, "cd_status": true});
          let cd_time = itemR.cd_left;
          durationInterval = setInterval(() => {
            cd_time -= 1;
            this.setCdLeft({"index": itemR.index, "cd_left": cd_time});
          }, 1000);
          setTimeout(() => {
            clearInterval(durationInterval);
            this.setCd({"index": itemR.index, "cd_status": false});
            this.setTimeLeft({"index": itemR.index, "time_left": itemR.time});
            this.setCdLeft({"index": itemR.index, "cd_left": itemR.cd});
          }, itemR.cd * 1000);
        }, itemR.time * 1000);
      }
    },
    doubleDamage() {
      let status = false;
      let itemR = null;
      this.skills.forEach((item) => {
        if (item.callback === "doubleDamage" && !item.status) {
          status = true;
          itemR = item;
        }
      });
      if (status) {
        this.useSkill({"index": itemR.index, "status": true});
        this.dmgMult(2);
        let time = itemR.time_left;
        let durationInterval = setInterval(() => {
          time -= 1;
          this.setTimeLeft({"index": itemR.index, "time_left": time});
        }, 1000);
        setTimeout(() => {
          clearInterval(durationInterval);
          this.useSkill({"index": itemR.index, "status": false});
          this.dmgMult(1);
          this.setCd({"index": itemR.index, "cd_status": true});
          let cd_time = itemR.cd_left;
          durationInterval = setInterval(() => {
            cd_time -= 1;
            this.setCdLeft({"index": itemR.index, "cd_left": cd_time});
          }, 1000);
          setTimeout(() => {
            clearInterval(durationInterval);
            this.setCd({"index": itemR.index, "cd_status": false});
            this.setTimeLeft({"index": itemR.index, "time_left": itemR.time});
            this.setCdLeft({"index": itemR.index, "cd_left": itemR.cd});
          }, itemR.cd * 1000);
        }, itemR.time * 1000);
      }
    },
    doubleMoney() {
      let status = false;
      let itemR = null;
      this.skills.forEach((item) => {
        if (item.callback === "doubleMoney" && !item.status) {
          status = true;
          itemR = item;
        }
      });
      if (status) {
        this.useSkill({"index": itemR.index, "status": true});
        this.moneyMult(2);
        let time = itemR.time_left;
        let durationInterval = setInterval(() => {
          time -= 1;
          this.setTimeLeft({"index": itemR.index, "time_left": time});
        }, 1000);
        setTimeout(() => {
          clearInterval(durationInterval);
          this.useSkill({"index": itemR.index, "status": false});
          this.moneyMult(1);
          this.setCd({"index": itemR.index, "cd_status": true});
          let cd_time = itemR.cd_left;
          durationInterval = setInterval(() => {
            cd_time -= 1;
            this.setCdLeft({"index": itemR.index, "cd_left": cd_time});
          }, 1000);
          setTimeout(() => {
            clearInterval(durationInterval);
            this.setCd({"index": itemR.index, "cd_status": false});
            this.setTimeLeft({"index": itemR.index, "time_left": itemR.time});
            this.setCdLeft({"index": itemR.index, "cd_left": itemR.cd});
          }, itemR.cd * 1000);
        }, itemR.time * 1000);
      }
    },
  }
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

.skills-ul {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-block-end: 0;
  margin-block-start: 0;
}

.skills-li {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: cornflowerblue;
  border-left: solid #1344a0 4px;
  border-right: solid #1344a0 4px;
  border-top: solid #1344a0 2px;
  border-bottom: solid #1344a0 2px;
}

.skills-li.active {
  background: green;
}

.skills-li.countdown {
  background: yellow;
}


.skills-li a {
  color: black;
  width: 50%;
  display: flex;
  font-size: 20px;
}

.skills-li span {
  left: 25px;
  position: relative;
  display: flex;
  align-items: center;
}

.skills-li:first-of-type {
  border-top: solid #1344a0 4px;
}

.skills-li:last-of-type {
  border-bottom: solid #1344a0 4px;
}

.show {
  display: block;
}
</style>
