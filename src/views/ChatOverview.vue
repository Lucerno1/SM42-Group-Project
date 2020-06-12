<template>
  <div>
    <TopBar pageTitle="Chats"></TopBar>
    <div class="chat-items">
      <ChatOverviewItem
        :profilePicture="profilePicture"
        :newMsg="newMsg"
        :firstName="firstName"
        :lastName="lastName"
        :message="message"
        :time="time"
      ></ChatOverviewItem>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar.vue'
import ChatOverviewItem from '@/components/chatOverview/ChatOverviewItem.vue'

export default {
  name: 'ChatOverview',
  data() {
    return {
      profilePicture: '#424242',
      newMsg: true,
      firstName: 'Achmed',
      lastName: 'Akkabi',
      message: 'Lorem ipsum dolor setameta di axio',
      time: '13:45'
    }
  },
  components: { TopBar, ChatOverviewItem }
}
</script>

<style scoped>
.chat-items {
  display: grid;
  width: 100%;
  height: auto;
  margin-top: 135px;
}
</style>
