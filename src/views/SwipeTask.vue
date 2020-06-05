<template>

<div>
  <Intro v-if="false"/>
  <p class="test">Swipe</p>
  </div>

</template>

<script>

import Intro from '@/components/Intro'

export default {
  name: 'SwipeTask',
  components: {Intro}
}

</script>

<style scoped>
.test{
  top:0;
  left:0;
  position: absolute;
  color:red;
}

</style>
