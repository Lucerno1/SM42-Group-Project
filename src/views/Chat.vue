<template>
  <div>
    <div class="top-bar">
      <div class="first"></div>
      <div class="second hpx-70"></div>
      <div class="third hpx-70">
        <div class="overlap hpx-70"></div>
        <div class="back hpx-70"></div>
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
      <Input class="input" :type="text" :name="message" v-model="value" />
      <button class="camera">
        <camera-icon class="icon" size="1.3x"></camera-icon>
      </button>
    </div>
  </div>
</template>

<script>
import Input from '@/components/input/Input.vue'
import { CameraIcon } from 'vue-feather-icons'

export default {
  data() {
    return {
      value: ''
    }
  },
  components: { Input, CameraIcon }
}
</script>

<style scoped>
.hpx-70 {
  height: 70px;
}

.top-bar {
  position: fixed;
  width: 100%;
}

.top-bar .first {
  background: #ff8a00;
  height: 120px;
}

.top-bar .second {
  background: #ff8a00;
  border-bottom-left-radius: 100px;
}

.top-bar .third {
  position: relative;
}

.third .overlap {
  position: absolute;
  background: #fff2e2;
  width: 100%;
  border-top-right-radius: 100px;
}

.third .back {
  position: absolute;
  background: #ff8a00;
  width: 100%;
  z-index: -1;
}

.msg-container {
  margin: 0 auto;
  display: flex;
  overflow: auto;
  margin-bottom: 160px;
  width: 90%;
  flex-direction: column-reverse;
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

.camera .icon {
  color: #636363;
}
</style>
