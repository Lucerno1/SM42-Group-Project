<template>
  <div class="avatar">
    <img class="picture" alt="Profile picture" :src="src" />
    <div class="dot"><edit-2-icon size="1.3x" class="icon"></edit-2-icon></div>
  </div>
</template>

<script>
import { Edit2Icon } from 'vue-feather-icons'

export default {
  name: 'Avatar',
  components: {
    Edit2Icon
  },
  props: {
    src: String
  }
}
</script>

<style scoped>
.avatar {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border-style: solid;
  border-color: #ff8a00;
  border-top-color: #fff2e2;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.picture {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border-style: solid;
  border-color: #fff2e2;
  background-color: #ff8a00;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  color: white;
}
</style>
