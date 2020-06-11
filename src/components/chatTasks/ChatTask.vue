<template>
  <div class="ChatTask">
      <ClipboardIcon class="icon" />
  </div>
</template>

<script>
import { ClipboardIcon } from 'vue-feather-icons'

export default {
  name: 'ChatTask',
  components: {
    ClipboardIcon
  }
}
</script>

<style>
.ChatTask {
 width: 58px;
 height: 58px;
 background: #fff2e2;
 border-radius: 50%;
 border: 2px solid #ff8a00;
 display: flex;
}

.icon {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: initial;
    padding: 15px;
    color: #ff8a00;
}
</style>
