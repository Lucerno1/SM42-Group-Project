<template>
<div class="content">
  <BigCircle class="first"><h1>Settings</h1></BigCircle>
  <div class="okay">
    <Avatar src="https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d"/>
    <h2>Test</h2>
    <h4>Test</h4>
    <LongButton>
      <Row class="row">
        <div class="grid-item" id="left">
          <h3>Account settings</h3>
        </div>
        <div class="grid-item" id="right">
          <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
        </div>
      </Row>
    </LongButton>
    <LongButton><h3>Darkmode</h3></LongButton>
    <LongButton><h3>Notifications</h3></LongButton>
    <LongButton><h3>Help</h3><chevron-right-icon size="1.5x" class="icon"></chevron-right-icon></LongButton>
    <LongButton><h3>Sign out</h3><chevron-right-icon size="1.5x" class="icon"></chevron-right-icon></LongButton>
  </div>
</div>
</template>

<script>
import LongButton from '@/components/LongButton'
import Avatar from '@/components/Avatar'
import BigCircle from '@/components/BigCircle'
import Row from '@/components/Row'
import {ChevronRightIcon} from 'vue-feather-icons'
export default {
  name: 'Settings',
  components: {Row, LongButton, Avatar, BigCircle, ChevronRightIcon}
  
}
</script>

<style scoped>
.content{
  width: 100%;
  text-align: center;
  position: relative;
  top: 0;

}
.okay{
 position:absolute;
 top: 120px;
 width: 100%;
 margin: 0 0 85px 0;
}
.first{
  position: absolute;
  width: 100%;
}
.icon{
  color: rgb(100, 100, 100)
}
.grid-item{
  width: 50%
}

</style>
