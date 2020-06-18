<template>
  <div :class="'ChatTask' + ' ' + state">
    <ClipboardIcon class="icon" />
  </div>
</template>

<script>
import { ClipboardIcon } from 'vue-feather-icons'

export default {
  name: 'ChatTask',
  components: {
    ClipboardIcon
  },
  props: {
    state: String
  }
}
</script>

<style>
.ChatTask {
  margin: auto 5px;
  width: 58px;
  height: 58px;
  background: #fff2e2;
  border-radius: 50%;
  border: 2px solid #ff8a00;
  display: flex;
  flex: 0 0 auto;
}

.ChatTask.active {
  background: #ff8a00;
  border: 2px solid #fff2e2;
}

.icon {
  align-items: center;
  justify-content: center;
  width: 100%;
  height: initial;
  padding: 15px;
  color: #ff8a00;
}

.ChatTask.active .icon {
  color: #fff2e2;
}
</style>
