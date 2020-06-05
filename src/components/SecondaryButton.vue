<template>
  <button @click="functionName" class="btn">{{ name }}</button>
</template>

<script>
export default {
  name: 'SecondaryButton',
  props: {
    name: String,
    functionName: Function
  }
}
</script>

<style scoped>
.btn {
  font-size: 20px;
  font-weight: bold;
  background: #fff2e2;
  border: solid #ff8a00 2px;
  border-radius: 60px;
  padding: 12px 0;
  cursor: pointer;
  color: #ff8a00;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  background: #ff8a00;
  color: #ffffff;
  transition: 0.2s ease-in-out;
}
</style>
