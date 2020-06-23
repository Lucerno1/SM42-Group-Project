<template>
  <div :class="'ChatTask' + ' ' + state">
    <clipboard-icon size="1.5x" class="icon"></clipboard-icon>
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

<style scoped>
.ChatTask {
  width: 55px;
  height: 55px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  border: 2px solid #fff;
}

.ChatTask.active {
  background: #ff8a00;
  border: 2px solid #fff2e2;
}

.icon {
  align-items: center;
  justify-content: center;
  color: #ff8a00;
}

.ChatTask.active .icon {
  color: #fff2e2;
}
</style>
