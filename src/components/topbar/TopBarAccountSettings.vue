<template>
  <div>
    <div class="topBar">
      <div class="solidTopBar">
        <div class="flex-between">
          <div class="left-icon">
            <arrow-left-icon
              size="1.5x"
              class="white-text"
              @click="$router.go(-1)"
            ></arrow-left-icon>
          </div>
          <span class="white-big-text flex">{{ pageTitle }}</span>
          <div class="right-icon">
            <Trash2Icon size="1.5x" class="white-text"></Trash2Icon>
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
.flex {
  display: flex;
  justify-content: center;
}
.left-icon {
  margin: 1vw 0 0 10vw;
}

.right-icon {
  margin-right: 10vw;
  visibility: hidden;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  height: 100%;
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
</style>
