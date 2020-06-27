<template>
  <div class="top-bar">
    <div class="first">
      <span class="white-big-text">{{ pageTitle }}</span>
    </div>
    <div class="second">
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: String
  },
  name: 'TopBar'
}
</script>

<style scoped>
.top-bar {
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
}

.first span {
  z-index: 4;
}

.top-bar .first {
  background: #ff8a00;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 80px;
}

.top-bar .second {
  position: relative;
  height: 90px;
}

.second .back {
  position: relative;
  height: 80px;
  background: transparent;
  width: 100%;
  border-top-right-radius: 80px;
  box-shadow: 170px -80px 0px 70px #ff8a00;
}
</style>
