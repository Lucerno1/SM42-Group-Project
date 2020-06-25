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
    const firstTime = localStorage.getItem('firstTime')
    if (firstTime === null) {
      this.$router.push('Introduction')
    }
    this.load()
  }
}
</script>

<style scoped></style>
