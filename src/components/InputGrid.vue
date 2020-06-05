<template>
  <div
    :class="'grid' + ' ' + grid"
    :style="
      'grid-template-columns: ' + columns + ';margin-bottom: ' + mgb + 'px'
    "
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'InputGrid',
  props: {
    columns: String,
    mgb: Number,
    grid: String
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  width: 80%;
  justify-content: center;
  grid-gap: 11px;
  margin: 0 auto;
}
</style>
