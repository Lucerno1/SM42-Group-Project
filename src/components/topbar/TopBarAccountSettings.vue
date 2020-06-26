<template>
  <div class="top-bar">
    <div class="first">
      <div class="left-icon">
        <arrow-left-icon
          size="1.5x"
          class="white-text"
          @click="$router.go(-1)"
        ></arrow-left-icon>
      </div>
      <span class="white-big-text">{{ pageTitle }}</span>
      <div class="right-icon">
        <Trash2Icon size="1.5x" class="white-text"></Trash2Icon>
      </div>
    </div>
    <div class="second">
      <div class="back"></div>
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
.top-bar {
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
}

.first * {
  z-index: 4;
}

.left-icon {
  margin: 1vw 0 0 10vw;
}

.right-icon {
  margin: 1vw 10vw 0 0;
  visibility: hidden;
}

.top-bar .first {
  background: #ff8a00;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  box-shadow: 170px -70px 0px 70px #ff8a00;
}
</style>
