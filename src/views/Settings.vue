<template>
  <div class="content">
    <BigCircle height="150">
      <span class="white-big-text flex">Settings</span></BigCircle
    >
    <div class="inner-content">
      <Avatar src="" />
      <div class="mt-10">
        <span class="orange-big-text">{{ firstname }} {{ lastname }}</span>
      </div>
      <div>
        <span class="grey-text">{{ username }}</span>
      </div>
      <LongButton class="long-btn">
        <router-link :to="{ name: 'AccountSettings' }" class="row">
          <Row>
            <div class="grid-item" id="left">
              <span class="dark-grey-text">Account Settings</span>
            </div>
            <div class="grid-item" id="right">
              <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
            </div>
          </Row>
        </router-link>
      </LongButton>
      <LongButton class="long-btn">
        <Row class="row">
          <div class="grid-item" id="left">
            <span class="dark-grey-text">Darkmode</span>
          </div>
          <div class="grid-item" id="right">
            <Toggle />
          </div>
        </Row>
      </LongButton>
      <LongButton class="long-btn">
        <Row class="row">
          <div class="grid-item" id="left">
            <span class="dark-grey-text">Notifications</span>
          </div>
          <div class="grid-item" id="right">
            <Toggle />
          </div>
        </Row>
      </LongButton>
      <LongButton class="long-btn">
        <router-link :to="{ name: 'Introduction' }" class="row">
          <Row>
            <div class="grid-item" id="left">
              <span class="dark-grey-text">Help</span>
            </div>
            <div class="grid-item" id="right">
              <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
            </div>
          </Row>
        </router-link>
      </LongButton>

      <div class="empty"></div>

      <LongButton class="long-btn" @click.native="logOutAndRedirect">
        <Row class="row">
          <div class="grid-item" id="left">
            <span class="dark-grey-text">Sign out</span>
          </div>
          <div class="grid-item" id="right">
            <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
          </div>
        </Row>
      </LongButton>
    </div>
  </div>
</template>

<script>
import LongButton from '@/components/LongButton'
import Avatar from '@/components/Avatar'
import BigCircle from '@/components/BigCircle'
import Row from '@/components/Row'
import { ChevronRightIcon } from 'vue-feather-icons'
import Toggle from '@/components/Toggle'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'Settings',
  components: { Row, LongButton, Avatar, BigCircle, ChevronRightIcon, Toggle },
  computed: {
    ...mapGetters('user', ['firstname', 'lastname', 'username'])
  },
  data() {
    return {
      Username: 'Username'
    }
  },
  methods: {
    ...mapActions('user', ['logOut']),
    logOutAndRedirect() {
      this.logOut()
      this.$router.push('Login')
    }
  }
}
</script>

<style scoped>
* {
  text-decoration: none;
}
.content {
  width: 100%;
  text-align: center;
  position: relative;
  top: 0;
}
.inner-content {
  position: absolute;
  top: 120px;
  width: 100%;
  margin: 0 0 85px 0;
}

.icon {
  color: rgb(100, 100, 100);
}
.grid-item {
  width: 50%;
  display: flex;
  align-items: center;
}
.long-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  width: 95%;
}
#right {
  display: flex;
  justify-content: flex-end;
}
.header {
  margin-top: 10px;
}

.empty {
  margin: 50px 0;
}

.mt-10 {
  margin-top: 10px;
}
</style>
