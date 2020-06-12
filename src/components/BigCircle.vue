<template>
  <div :style="'height: ' + height + 'px;'" class="circle"><slot></slot></div>
</template>

<script>
export default {
  name: 'BigCircle',
  props: {
    height: Number
  }
}
</script>

<style scoped>
.circle {
  position: absolute;
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
