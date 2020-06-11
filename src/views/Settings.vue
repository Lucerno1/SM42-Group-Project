<template>
<div class="content">
  <BigCircle class="first"><h1>Settings</h1></BigCircle>
  <div class="okay">
    <Avatar src="https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d"/>
    <h2 class="header">Test</h2>
    <h4>Test</h4>
    <LongButton class="long-btn">
      <Row class="row">
        <div class="grid-item" id="left">
          <h3>Account settings</h3>
        </div>
        <div class="grid-item" id="right">
          <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
        </div>
      </Row>
    </LongButton>
    <LongButton class="long-btn">
     <Row class="row">
        <div class="grid-item" id="left">
          <h3>Darkmode</h3>
        </div>
        <div class="grid-item" id="right">
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
      </Row>
    </LongButton>
    <LongButton class="long-btn">
      <Row class="row">
        <div class="grid-item" id="left">
          <h3>Notifications</h3>
        </div>
        <div class="grid-item" id="right">
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>
      </Row>
    </LongButton>
    <LongButton class="long-btn"> 
      <Row class="row">
        <div class="grid-item" id="left">
          <h3>Help</h3>
        </div>
        <div class="grid-item" id="right">
          <chevron-right-icon size="1.5x" class="icon"></chevron-right-icon>
        </div>
      </Row>
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
.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 29px;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(221, 221, 221);
  -webkit-transition: .4s;
  transition: .4s;
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: #ff8a00;
  -webkit-transition: .4s;
  transition: .4s;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

input:checked + .slider {
  background-color: rgb(255, 240, 221);
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(255, 215, 163);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.empty{
  margin: 50px 0;
}
</style>
