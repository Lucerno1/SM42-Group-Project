<template>
  <div class="content">
    <div><h1>Uh Oh!</h1></div>
    <div>
      <p>
        You don't have an internet connection. Some of the functionalities of
        <strong>Local Buddy</strong> will not be accessible. However, we have
        stored a few pages for you :)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfflinePage'
}
</script>

<style scoped>
.content {
  position: absolute;
  width: 85%;
  height: fit-content;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
