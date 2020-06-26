<template>
  <div>
    <TopBar pageTitle="Chats"></TopBar>
    <div class="chat-items">
      <ChatOverviewItem
        v-for="(chat, index) in chats"
        :key="'chat' + index"
        :profilePicture="profilePicture"
        :newMsg="newMsg"
        :firstName="chat.participants[0].firstname"
        :lastName="chat.participants[0].lastname"
        :message="chat.lastMessage.message"
        :time="chat.lastMessage.date"
        :functionName="redirect"
      ></ChatOverviewItem>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar.vue'
import ChatOverviewItem from '@/components/chatOverview/ChatOverviewItem.vue'
import { mapGetters, mapActions } from 'vuex'

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
  computed: {
    ...mapGetters('chats', ['chats'])
  },
  methods: {
    ...mapActions('chats', ['loadChatOverview']),
    redirect() {
      this.$router.push('Chat')
    }
  },
  components: { TopBar, ChatOverviewItem },
  created() {
    this.loadChatOverview()
  }
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
