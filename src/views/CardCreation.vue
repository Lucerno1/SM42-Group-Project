<template>
  <div>
    <TopBar pageTitle="Card Creation"></TopBar>
    <div class="wrapper">
      <h2>Create a request card</h2>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'

export default {
  name: 'TaskOverview',
  components: { TopBar }
}
</script>

<style>
.wrapper {
  max-width: 80vw;
  margin: 0 10vw;
  top: 120px;
  position: relative;
}
</style>
