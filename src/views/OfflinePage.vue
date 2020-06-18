<template>
  <div class="content">
    <div class="logo"><img src="/img/Logo-LocalBuddy.svg" /></div>
    <div class="heading"><h1>Uh Oh!</h1></div>
    <div class="paragraph">
      <p>
        You don't have internet connection. Some of the functionalities of
        <strong>Local Buddy</strong> will not be accessible. However, we have
        stored a few pages for you. :)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfflinePage',
  props: {}
}
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logo {
  position: absolute;
  top: 60px;
}

.heading {
  position: absolute;
  top: 190px;
}
.paragraph {
  position: absolute;
  top: 250px;
}
</style>
