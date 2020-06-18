<template>
  <div>
    <div class="topBar">
      <div class="flex solidTopBar">
        <span class="white-big-text flex">{{ pageTitle }}</span>
      </div>
    </div>

    <div class="secondTopBar orangeBackground">
      <div class="cornerTopBar"></div>
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
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.topBar {
  z-index: 1;
  position: fixed;
  top: 0px;
  width: 100vw;
  background-color: #fff2e2;
}
.secondTopBar {
  z-index: -10000;
  position: fixed;
  top: 0px;
  width: 100vw;
  background-color: #fff2e2;
}
h1 {
  padding-top: 30px;
  margin-top: 0px;
  text-align: center;
}
.solidTopBar {
  background-color: #ff8a00;
  height: 80px;
  border-bottom-left-radius: 10vw;
}
.cornerTopBar {
  margin-top: 80px;
  background-color: #fff2e2;
  height: 80px;
  border-top-right-radius: 10vw;
}
.orangeBackground {
  background-color: #ff8a00;
}

.white-text {
  color: white;
  font-size: 1.2rem;
}
</style>
