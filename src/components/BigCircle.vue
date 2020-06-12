<template>
  <div class="circle"><slot></slot></div>
</template>

<script>
export default {
  name: 'BigCircle'
}
</script>

<style scoped>
.circle {
  position: absolute;
  height: 230px;
  width: 110%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff8a00;
  border-radius: 0 0 50% 50%;
  display: flex;
  justify-content: center;
}

.circle span {
  margin-top: 50px;
}
</style>
