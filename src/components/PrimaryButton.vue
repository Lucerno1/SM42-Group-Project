<template>
  <input type="submit" class="btn" :value="value" />
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    value: String
  }
}
</script>

<style scoped>
.btn {
  font-size: 20px;
  font-weight: bold;
  background: #ff8a00;
  border: solid #ff8a00 2px;
  border-radius: 60px;
  padding: 12px 0;
  cursor: pointer;
  color: #ffffff;
}
</style>
