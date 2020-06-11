<template>
  <div class="cardButton">
    <p class="title">{{ title }}</p>
    <trash-2-icon size="1.5x" class="orangeIcon"></trash-2-icon>
  </div>
</template>

<script>
import { Trash2Icon } from 'vue-feather-icons'
export default {
  name: 'CardButton',
  props: {
    title: String,

  },
  components: {
    Trash2Icon
  }
}
</script>

<style>
.cardButton {
  background-color: white;
  height: 22px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.orangeIcon {
  color: #ff8a00;
}

.title {
  font-weight: 900;
  color: #727272;
}
</style>
