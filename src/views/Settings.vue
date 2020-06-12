<template>
<div class="content">
  <BigCircle class="first"><h1>Settings</h1></BigCircle>
  <div class="inner-content">
    <Avatar src=""/>
    <h2 class="header">{{Firstname}} {{Lastname}}</h2>
    <h4>{{Username}}</h4>
    <LongButton class="long-btn">
      <router-link :to="{ name: 'AccountSettings' }"  class="row">
      <Row>
        <div class="grid-item" id="left">          
          <h3>Account settings</h3>
        </div>
        <div class="grid-item" id="right">
          <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
        </div>
      </Row> </router-link>
    </LongButton>
    <LongButton class="long-btn">
     <Row class="row">
        <div class="grid-item" id="left">
          <h3>Darkmode</h3>
        </div>
        <div class="grid-item" id="right">
          <Toggle/>
        </div>
      </Row>
    </LongButton>
    <LongButton class="long-btn">
      <Row class="row">
        <div class="grid-item" id="left">
          <h3>Notifications</h3>
        </div>
        <div class="grid-item" id="right">
          <Toggle/>
        </div>
      </Row>
    </LongButton>
    <LongButton class="long-btn"> 
      <router-link :to="{ name: 'Introduction' }"  class="row">
        <Row class="row">
          <div class="grid-item" id="left">
            <h3>Help</h3>
          </div>
          <div class="grid-item" id="right">
            <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
          </div>
        </Row>
      </router-link>
    </LongButton>

    <div class="empty"></div>

    <LongButton class="long-btn">
      <Row class="row">
        <div class="grid-item" id="left">
          <h3>Sign out</h3>
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
import {ChevronRightIcon} from 'vue-feather-icons'
import Toggle from '@/components/Toggle'
export default {
  name: 'Settings',
  components: {Row, LongButton, Avatar, BigCircle, ChevronRightIcon, Toggle},
  data(){
    return{
      Firstname: "Firstname",
      Lastname: "Lastname",
      Username: "Username",
    }
  }
  
}
</script>

<style scoped>
*{
    text-decoration: none;

}
.content{
  width: 100%;
  text-align: center;
  position: relative;
  top: 0;

}
.inner-content{
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
  width: 50%;
  display:flex;
  align-items:center;
}
.long-btn{
  display:flex;
  align-items:center;
  justify-content:center;
}
.row{
  width:95%;
}
#right{
display:flex;justify-content:flex-end;
}
.header{
  margin-top: 10px;
}

.empty{
  margin: 50px 0;
}
</style>
