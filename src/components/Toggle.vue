<template>
<label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
</label>
</template>

<script>
export default {
  name: 'Toggle',
  components: {}
  
}
</script>

<style scoped>
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
</style>