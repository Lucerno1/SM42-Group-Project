<template>
  <div class="ChatTaskOverview">
      <ChatTask id= "hi" state="active" />
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
width: initial;
background: #ff8a00;
display: flex;
padding: 0 10%;
flex-wrap: nowrap;
overflow-x: auto;
}
</style>
