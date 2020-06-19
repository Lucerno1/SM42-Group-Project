<template>
  <div>
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import { mapActions } from 'vuex'

export default {
  name: 'AppWrapper',
  components: {
    NavBar
  },
  methods: {
    ...mapActions('user', ['load'])
  },
  created() {
    this.load()
  }
}
</script>

<style scoped></style>
