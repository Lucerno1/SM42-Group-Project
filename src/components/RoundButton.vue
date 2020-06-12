<template>
  <div
    class="round-button"
    :style="
      'background-color: ' +
      color +
      '; height: ' +
      length +
      '; width: ' +
      length +
      ';'
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RoundButton',
  props: {
    color: String,
    length: String
  }
}
</script>

<style scoped>
.round-button {
  padding: 4px;
  border: 2px solid #ff8a00;
  border-radius: 50%;
}
</style>
