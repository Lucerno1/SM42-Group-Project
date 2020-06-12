<template>
  <div>
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'

export default {
  name: 'AppWrapper',
  components: {
    NavBar
  }
}
</script>

<style scoped></style>
