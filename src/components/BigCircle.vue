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
    height: 150px;
    background-color: #FF8A00;
    border-radius: 0 0 50% 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
}
</style>
