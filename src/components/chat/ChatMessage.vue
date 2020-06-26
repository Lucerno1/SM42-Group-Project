<template>
  <div :class="'msg-bubble' + ' ' + user">
    <span class="name" v-if="name != 'user'">{{ name }}<br /></span>
    <span>{{ message }}</span>
    <span class="time">{{ time }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    user: String,
    name: String,
    message: String,
    time: String
  }
}
</script>

<style scoped>
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
</style>
