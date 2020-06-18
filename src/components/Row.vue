<template>
  <div class="rowWrapper" :style="'padding: ' + margin + 'px'">
    <div class="row">
      <slot class="child"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    margin: Number
  }
}
</script>

<style scoped>
.row {
  display: inline-flex;
  width: 100%;
}

.child {
  display: inline-block;
}

.rowWrapper {
  display: block;
}
</style>
