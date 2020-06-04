<template>
  <div class="navBar">
    <Row :margin="10">
      <Button v-for="(icon, index) in icons" :key="'icon:' + index">
        <div class="navButton">
          <component :is="icon" class="whiteSVG"></component>
          <!--          <img :src="icon.src" alt="" />-->
        </div>
      </Button>
    </Row>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Row from '@/components/Row'
import {
  UsersIcon,
  SettingsIcon,
  ClipboardIcon,
  MessageSquareIcon
} from 'vue-feather-icons'

export default {
  name: 'NavBar',
  data() {
    return {
      icons: [UsersIcon, ClipboardIcon, MessageSquareIcon, SettingsIcon]
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

.whiteSVG {
  color: white;
}
</style>
