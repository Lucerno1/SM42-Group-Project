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
        <span class="white-big-text">{{ name }}</span>
        <div class="right-icon">
          <arrow-left-icon size="1.5x" class="white-text"></arrow-left-icon>
        </div>
        <span class="bottomTitle white-text">Requests & Questions</span>
      </div>
      <div class="second hpx-70">
        <div class="container-task">
          <ChatTask :state="taskState" @click.native="popupFunction"></ChatTask>
          <ChatTask></ChatTask>
          <ChatTask></ChatTask>
          <ChatTask></ChatTask>
        </div>
        <ChatCardPopup v-show="popup"></ChatCardPopup>
      </div>
      <div class="third hpx-70">
        <div class="back hpx-70"></div>
      </div>
    </div>

    <div class="msg-container">
      <ChatMessage
        v-for="(message, index) in chatMessages"
        :key="'message:' + index"
        :class="isMe(id, message._id) ? 'self' : 'other'"
        :name="getName(message._id)"
        :message="message.message"
        :time="message.date | formatDate"
      ></ChatMessage>
    </div>

    <div class="input-container">
      <Input class="input" v-model="value" @keydown.enter.native="sendMsg" />
      <button class="camera">
        <camera-icon class="iconC" size="1.3x"></camera-icon>
      </button>
    </div>
    <div class="coverBottom"></div>
  </div>
</template>

<script>
import ChatMessage from '@/components/chat/ChatMessage.vue'
import ChatTask from '@/components/chat/ChatTask.vue'
import Input from '@/components/input/Input.vue'
import { ArrowLeftIcon, CameraIcon } from 'vue-feather-icons'
import ChatCardPopup from '@/components/chat/ChatCardPopup.vue'
import { mapActions, mapGetters } from 'vuex'
import user from '@/mixins/user'

export default {
  data() {
    return {
      value: '',
      popup: false,
      taskState: 'inactive'
    }
  },
  mixins: [user],
  computed: {
    ...mapGetters('chat', ['name', 'chatMessages', 'participants']),
    ...mapGetters('user', ['id'])
  },
  components: {
    ChatMessage,
    ChatTask,
    Input,
    ArrowLeftIcon,
    CameraIcon,
    ChatCardPopup
  },
  methods: {
    popupFunction() {
      this.popup = !this.popup
      this.popup ? (this.taskState = 'active') : (this.taskState = 'inactive')
    },
    ...mapActions('chat', ['load', 'sendMessage']),
    getName: function (id) {
      const user = this.getUser(id, this.participants)
      return user.firstname + ' ' + user.lastname
    },
    sendMsg: function () {
      this.sendMessage(this.value)
      this.value = ''
      setTimeout(() => {
        this.scrollToBottom()
      }, 300)
    },
    scrollToBottom() {
      let scrollingElement = document.scrollingElement || document.body
      scrollingElement.scrollTop = scrollingElement.scrollHeight
    }
  },
  created() {
    this.load(this.$route.params.id)
  },
  updated() {
    this.scrollToBottom()
  }
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
  margin: 1vw 0 0 8vw;
}

.right-icon {
  margin-right: 8vw;
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

.top-bar .first *,
.top-bar .second * {
  z-index: 3;
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
  border-bottom-left-radius: 100px;
}

.top-bar .third {
  position: relative;
}

.third .back {
  position: relative;
  background: transparent;
  width: 100%;
  border-top-right-radius: 70px;
  box-shadow: 140px -71px 0px 70px #ff8a00;
}

.msg-container {
  position: absolute;
  display: flex;
  flex-direction: column;
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
