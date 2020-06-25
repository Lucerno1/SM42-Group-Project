<template>
  <div class="intro">
    <img class="picture" alt="not visible" :src="src" />
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    src: String
  }
}
</script>

<style scoped>
.intro {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.picture {
  width: 100%;
}

@media only screen and (min-width: 360px) {
  .intro {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .picture {
    width: auto;
    height: 100%;
  }
}
</style>
