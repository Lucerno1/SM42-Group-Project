<template>
  <div class="navBar">
    <Row :margin="16">
      <Button v-for="(icon, index) in icons" :key="'icon:' + index">
        <div class="navButton">
          <component
            :is="icon.comp"
            class="whiteSVG"
            v-on:click="redirect(icon.locs)"
            v-if="isLoggedIn"
          ></component>

          <component
            :is="icon.comp"
            class="whiteSVG"
            v-on:click="redirect('login')"
            v-else
          ></component>
          <span v-if="icon.locs.includes($route.name)" class="dot"></span>
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
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      icons: [
        { comp: UsersIcon, locs: ['Task'] },
        {
          comp: ClipboardIcon,
          locs: ['Tasks', 'RequestCardCreation', 'QuestionCardCreation']
        },
        { comp: MessageSquareIcon, locs: ['ChatOverview', 'Chat'] },
        { comp: SettingsIcon, locs: ['Settings', 'AccountSettings'] }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn'])
  },
  methods: {
    redirect: function (locs) {
      if (locs.includes(this.$route.name)) {
        return
      }
      this.$router.push({ name: locs[0] })
    }
  },
  components: { Row, Button }
}
</script>

<style scoped>
.navBar {
  position: fixed;
  bottom: 0;
  height: 85px;
  width: 100vw;
  background-color: #ff8a00;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 9999;
}

.navButton {
  width: 100%;
  text-align: center;
}

.whiteSVG {
  color: white;
}

.dot {
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  height: 6px;
  width: 6px;
  background-color: white;
  border-radius: 50%;
  display: block;
}
</style>
