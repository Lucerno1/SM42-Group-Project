<template>
<div class="content">
    <BigCircle/>
  <h1>Settings</h1>
  <Avatar src="https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d"/>
  <LongButton/>
  <LongButton/>
  <LongButton/>
  <LongButton/>  
  <LongButton/>
</div>
</template>

<script>
import LongButton from '@/components/LongButton'
import Avatar from '@/components/Avatar'
import BigCircle from '@/components/BigCircle'
export default {
  name: 'Settings',
  components: {LongButton, Avatar, BigCircle}
  
}
</script>

<style scoped>
.content{
  background-color: #FFF2E2;
  height: 100%;
  width: 100%;
  text-align: center;
  position: absolute;
  top:0;
}
h1{
  position: absolute;
}

</style>
