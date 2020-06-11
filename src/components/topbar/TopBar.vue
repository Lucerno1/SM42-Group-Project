<template>
  <div>
    
    <div class="topBar ">
      <div class="solidTopBar">
        <h1>{{ pageTitle }}</h1>
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

<style>
.topBar {
  z-index: 1;
  position: fixed;
  top: 0px;
  width: 100vw;
  background-color: #FFF2E2;
}
.secondTopBar {
  z-index: -10000;
  position: fixed;
  top: 0px;
  width: 100vw;
  background-color: #FFF2E2;
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
.cornerTopBar{
  margin-top: 80px;
  background-color: #FFF2E2;
  height: 80px;
  border-top-right-radius: 10vw;
}
.orangeBackground{
  background-color: #ff8a00;
}


</style>
