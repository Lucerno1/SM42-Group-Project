<template>
  <div class="long-button"><slot></slot></div>
</template>

<script>
export default {
  name: 'LongButton',
  components: {}
}
</script>

<style scoped>
.long-button {
  width: 80%;
  border-radius: 8px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  margin: 11px auto;
}
</style>
