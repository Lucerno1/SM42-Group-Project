<template>
  <div>
    <TopBar pageTitle="Chats"></TopBar>
    <div class="chat-items">
      <ChatOverviewItem
        v-for="(chat, index) in chats"
        :key="'chat' + index"
        :profilePicture="profilePicture"
        :newMsg="true"
        :firstName="getOther(selfId, chat.participants).firstname"
        :lastName="getOther(selfId, chat.participants).lastname"
        :message="chat.lastMessage.message"
        :time="chat.lastMessage.date"
        :functionName="
          () => {
            redirect(chat._id)
          }
        "
      ></ChatOverviewItem>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar.vue'
import ChatOverviewItem from '@/components/chatOverview/ChatOverviewItem.vue'
import { mapGetters, mapActions } from 'vuex'
import user from '@/mixins/user'

export default {
  name: 'ChatOverview',
  mixins: [user],
  computed: {
    ...mapGetters('chats', ['chats']),
    ...mapGetters('user', { selfId: 'id' })
  },
  methods: {
    ...mapActions('chats', ['loadChatOverview']),
    redirect(id) {
      this.$router.push({ name: 'Chat', params: { id: id } })
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
