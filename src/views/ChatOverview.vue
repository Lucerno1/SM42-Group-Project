<template>
  <div class="chatOverview">
    <div class="top-bar">
      <span class="white-big-text">Chat</span>
    </div>
    <div class="container"></div>
    <div class="chat-container">
      <ChatOverviewItem
        v-for="(chat, index) in chats"
        :key="'chat' + index"
        :profilePicture="profilePicture"
        :newMsg="true"
        :firstName="getOther(selfId, chat.participants).firstname"
        :lastName="getOther(selfId, chat.participants).lastname"
        :message="chat.lastMessage.message"
        :time="chat.lastMessage.date | formatDate"
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
  components: {
    ChatOverviewItem
  },
  created() {
    this.loadChatOverview()
  }
}
</script>

<style scoped>
.chatOverview {
  position: relative;
  max-height: 100%;
  width: 100%;
}

.top-bar {
  height: 100px;
  width: 100%;
  border-bottom-left-radius: 80px;
  background: #ff8a00;
  text-align: center;
  line-height: 100px;
}

.container {
  position: absolute;
  top: 0;
  right: 0;
  background: #ff8a00;
  width: 100px;
  height: 200px;
  z-index: -1;
}

.chat-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #fff2e2;
  border-top-right-radius: 80px;
  width: 100vw;
  height: 65vh;
  overflow: auto;
  padding-top: 15px;
  transition: 0.3s ease-in-out;
}

.chat-container::-webkit-scrollbar {
  width: 0 !important;
}

/* Media queries to support from iphone 5 to quad hd screens of 1440p */

@media only screen and (min-height: 568px) {
  .chat-container {
    height: 67vh;
  }
}

@media only screen and (min-height: 610px) {
  .chat-container {
    height: 69vh;
  }
}

@media only screen and (min-height: 648px) {
  .chat-container {
    height: 71vh;
  }
}

@media only screen and (min-height: 690px) {
  .chat-container {
    height: 73vh;
  }
}

@media only screen and (min-height: 735px) {
  .chat-container {
    height: 75vh;
  }
}

@media only screen and (min-height: 815px) {
  .chat-container {
    height: 77vh;
  }
}

@media only screen and (min-height: 870px) {
  .chat-container {
    height: 79vh;
  }
}

@media only screen and (min-height: 960px) {
  .chat-container {
    height: 81vh;
  }
}

@media only screen and (min-height: 1060px) {
  .chat-container {
    height: 82vh;
  }
}

@media only screen and (min-height: 1110px) {
  .chat-container {
    height: 83vh;
  }
}

@media only screen and (min-height: 1200px) {
  .chat-container {
    height: 85vh;
  }
}

@media only screen and (min-height: 1330px) {
  .chat-container {
    height: 86vh;
  }
}
</style>
