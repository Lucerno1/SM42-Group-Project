<template>

<div class="avatar">
    <img class="test" :src="src"/>
    <div class="dot"><edit-2-icon size="1.3x" class="icon"></edit-2-icon></div>
</div>
    

</template>

<script>
import {Edit2Icon} from 'vue-feather-icons'

export default {
  name: 'Avatar',
  components: {
    Edit2Icon,
    },
  props:{
    src: Blob,
  }

}
</script>

<style scoped>
.avatar {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border-style: solid;
  border-color: #FF8A00;
  border-top-color: #FFF2E2;
  position:relative;
  margin: 0 auto;
  display: flex;
  justify-content:center;
}
.test{
    width:90%;
    height:90%;
    border-radius: 50%;
    margin: auto;
    position:relative;
    display: flex;
    justify-content:center;align-items:center;
}
.dot{
    width:35px;
    height:35px;
    border-radius:50%;
    border-style: solid;
    border-color:#FFF2E2;
    background-color:#FF8A00;
    position:absolute;
    bottom:0;
    right:0;
    margin:0.5%; 
     display:flex;justify-content:center;align-items:center;

}
.icon{
  color:white;
}
</style>
