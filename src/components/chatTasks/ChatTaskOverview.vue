<template>
  <div class="ChatTaskOverview">
    <ChatTask id="hi" state="active" />
    <ChatTask />
    <ChatTask />
    <ChatTask />
    <ChatTask />
    <ChatTask />
  </div>
</template>

<script>
import ChatTask from '@/components/chatTasks/ChatTask.vue'

export default {
  name: 'ChatTaskOverview',
  components: {
    ChatTask
  }
}
</script>

<style>
.ChatTaskOverview {
  height: 80px;
  display: flex;
  padding: 0 10%;
  flex-wrap: nowrap;
}
</style>
