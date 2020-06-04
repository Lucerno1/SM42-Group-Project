<template>
  <div class="navBar">
    <Row :margin="10">
      <Button v-for="(icon, index) in icons" :key="'icon:' + index">
        <div class="navButton">
          <img :src="icon.src" alt="" />
        </div>
      </Button>
    </Row>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Row from '@/components/Row'

export default {
  name: 'NavBar',
  data() {
    return {
      icons: [
        { src: '/img/icons/users.svg' },
        { src: '/img/icons/clipboard.svg' },
        { src: '/img/icons/message-square.svg' },
        { src: '/img/icons/settings.svg' }
      ]
    }
  },
  components: { Row, Button }
}
</script>

<style scoped>
.navBar {
  height: 85px;
  width: 100vw;
  background-color: #ff8a00;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.navButton {
  width: 100%;
  text-align: center;
}
</style>
