<template>
  <button @click="functionName" class="btn orange-big-text">{{ name }}</button>
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
  background: #fff2e2;
  border: solid #ff8a00 2px;
  border-radius: 60px;
  padding: 12px 0;
  width: 120px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  background: #ff8a00;
  color: #ffffff;
  transition: 0.2s ease-in-out;
}

@media only screen and (min-width: 340px) {
  .btn {
    width: 135px;
  }
}

@media only screen and (min-width: 375px) {
  .btn {
    width: 145px;
  }
}
</style>
