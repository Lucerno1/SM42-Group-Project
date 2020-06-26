<template>
  <InputGrid
    @click.native="functionName"
    grid="chat-overview"
    columns="25% 55% 20%"
    :mgb="20"
  >
    <ProfileIcon
      :profilePicture="profilePicture"
      :newMsg="newMsg"
    ></ProfileIcon>
    <div class="text-box">
      <div class="name">{{ firstName }} {{ lastName }}</div>
      <div v-if="newMsg" class="msg newMsg">{{ message }}</div>
      <div v-else class="msg">{{ message }}</div>
    </div>
    <p class="time">{{ time }}</p>
  </InputGrid>
</template>

<script>
import InputGrid from '@/components/input/InputGrid.vue'
import ProfileIcon from '@/components/chatOverview/ProfileIcon.vue'

export default {
  name: 'ChatOverviewItem',
  props: {
    functionName: Function,
    profilePicture: String,
    newMsg: Boolean,
    firstName: String,
    lastName: String,
    message: String,
    time: String
  },
  components: { InputGrid, ProfileIcon }
}
</script>

<style scoped>
.text-box {
  padding-top: 5px;
  padding-left: 10px;
}

.name {
  color: #ff8a00;
  font-size: 15px;
  font-weight: 600;
}

.msg {
  margin-top: 5px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.newMsg {
  font-weight: 800;
}

.time {
  margin-top: 5px;
  font-size: 14px;
  color: #ff8a00;
}
</style>
