<template>
  <div class="cardButton">
    <span class="dark-grey-text">{{ title }}</span>
    <trash-2-icon
      size="1.5x"
      class="orange-text"
      @click="deleteRequest(id)"
    ></trash-2-icon>
  </div>
</template>

<script>
import { Trash2Icon } from 'vue-feather-icons'
import { mapActions } from 'vuex'
export default {
  name: 'CardButton',
  props: {
    title: String,
    id: String
  },
  methods: {
    ...mapActions('requests', ['deleteRequest'])
  },
  components: {
    Trash2Icon
  }
}
</script>

<style scoped>
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
</style>
