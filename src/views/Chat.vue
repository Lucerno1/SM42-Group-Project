<template>
  <div>
    <div class="top-bar">
      <div class="first">
        <div class="left-icon">
          <arrow-left-icon
            size="1.5x"
            class="white-text"
            @click="$router.go(-1)"
          ></arrow-left-icon>
        </div>
        <span class="white-big-text">Achmed Akkabi</span>
        <div class="right-icon">
          <arrow-left-icon size="1.5x" class="white-text"></arrow-left-icon>
        </div>
        <span class="bottomTitle white-text">Requests & Questions</span>
      </div>
      <div class="second hpx-70">
        <div class="container-task">
          <ChatTask></ChatTask>
          <ChatTask></ChatTask>
          <ChatTask></ChatTask>
          <ChatTask></ChatTask>
        </div>
      </div>
    </div>

    <div class="msg-container">
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>Lorem Ipsum dora sit amet</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble self">
        <span>Lorem Ipsum dora sit amet</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>ok</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>Lorem Ipsum dora?</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble self">
        <span>moeite</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble self">
        <span>moeite</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>Lorem Ipsum dora sit amet</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble self">
        <span>moeite</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>ok</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>ok</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>ok</span>
        <span class="time">13:45</span>
      </div>
      <div class="msg-bubble other">
        <span class="name">Achmed</span><br />
        <span>ok</span>
        <span class="time">13:45</span>
      </div>
    </div>

    <div class="input-container">
      <Input class="input" v-model="value" />
      <button class="camera">
        <camera-icon class="iconC" size="1.3x"></camera-icon>
      </button>
    </div>
    <div class="coverBottom"></div>
  </div>
</template>

<script>
import ChatTask from '@/components/chatTasks/ChatTask.vue'
import Input from '@/components/input/Input.vue'
import { ArrowLeftIcon, CameraIcon } from 'vue-feather-icons'

export default {
  data() {
    return {
      value: ''
    }
  },
  components: { ChatTask, Input, ArrowLeftIcon, CameraIcon }
}
</script>

<style scoped>
.hpx-70 {
  height: 70px;
}

.top-bar {
  position: fixed;
  width: 100%;
  z-index: 100;
}

.left-icon {
  margin: 1vw 0 0 10vw;
}

.right-icon {
  margin-right: 10vw;
  visibility: hidden;
}

.bottomTitle {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 25px;
  font-size: 0.75rem;
}

.container-task {
  margin: 0 auto;
  margin-top: -10px;
  max-width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.top-bar .first {
  background: #ff8a00;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar .second {
  background: #ff8a00;
  border-radius: 0 0 100px 100px;
}

.msg-container {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  width: 90%;
  height: auto;
  overflow: auto;
  margin-bottom: 160px;
  margin-top: 190px;
  left: 50%;
  transform: translateX(-50%);
}

.msg-container::-webkit-scrollbar {
  width: 0 !important;
}

.msg-bubble {
  width: fit-content;
  height: auto;
  margin: 8px 0;
  padding: 10px;
  background: #fff;
  position: relative;
  border-radius: 7px;
  font-size: 14px;
  color: #000;
}

.msg-bubble.self {
  background: #ff8a00;
  align-self: flex-end;
  color: white;
}

.msg-bubble.self .time {
  color: #fff;
  font-weight: 300;
  font-size: 10px;
  margin-left: 10px;
}

.msg-bubble.other .name {
  font-size: 12px;
  font-weight: 900;
}

.msg-bubble.other .time {
  color: #000;
  font-weight: 300;
  font-size: 10px;
  margin-left: 10px;
}

.input-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  margin-bottom: 85px;
  height: 75px;
  width: 90%;
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;
  background: #fff2e2;
}

.input-container .input {
  margin: 20px 0;
  border-radius: 200px;
  padding-left: 12px;
  height: 30px;
  border: none;
}

.input-container .camera {
  background: #fff;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  border: none;
  justify-self: end;
  padding: 6px;
}

.camera .iconC {
  color: #636363;
}

.coverBottom {
  position: fixed;
  background: #fff2e2;
  width: 100%;
  height: 85px;
  bottom: 0;
}
</style>
