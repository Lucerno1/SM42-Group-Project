<template>
  <div class="profile">
    <div class="ab-br50 icon" :style="'background: ' + profilePicture + ';'">
      <div v-if="newMsg" class="ab-br50 new-msg-bg">
        <div class="ab-br50 new-msg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    profilePicture: String,
    newMsg: Boolean
  }
}
</script>

<style scoped>
.ab-br50 {
  position: absolute;
  border-radius: 50%;
}

.profile {
  position: relative;
  width: 65px;
  height: 65px;
  background: #fff2e2;
  border-radius: 50%;
  border: #ff8a00 solid 2px;
}

.profile .icon {
  width: 65px;
  height: 65px;
  transform: scale(0.94);
}

.profile .icon .new-msg-bg {
  width: 18px;
  height: 18px;
  background: #fff2e2;
  right: 0;
  bottom: 0;
}

.profile .icon .new-msg {
  width: 18px;
  height: 18px;
  background: #ff8a00;
  right: 0;
  bottom: 0;
  transform: scale(0.8);
}
</style>
