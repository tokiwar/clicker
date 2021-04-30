<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

html {
  background: #abebc6;
  height: 100vh;
}

body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.main {
  margin: 0 auto;
  width: 480px;
  height: 848px;
  background: #e3d0d8;
}
</style>
<script>
export default {};
</script>
