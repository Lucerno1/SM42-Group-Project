<template>
  <div>
    <div class="topBar">
      <div class="solidTopBar">
        <div class="flex">
          <div class="left-icon">
            <arrow-left-icon size="1.5x"></arrow-left-icon>
          </div>
          <h1>{{ pageTitle }}</h1>
          <div class="right-icon">
            <Trash2Icon size="1.5x"></Trash2Icon>
          </div>
        </div>
      </div>
    </div>

    <div class="secondTopBar orangeBackground">
      <div class="cornerTopBar"></div>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon, Trash2Icon } from 'vue-feather-icons'

export default {
  props: {
    pageTitle: String
  },
  name: 'TopBar',
  components: {
    ArrowLeftIcon,
    Trash2Icon
  }
}
</script>

<style scoped>
.left-icon {
  padding-top: 30px;
  margin-left: 10vw;
}

.right-icon {
  padding-top: 30px;
  margin-right: 10vw;
}

.flex {
  display: flex;
  justify-content: space-between;
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
</style>
