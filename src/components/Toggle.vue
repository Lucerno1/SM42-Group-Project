<<<<<<< HEAD
<template>
  <label class="switch">
    <input :checked="toggle" type="checkbox" />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    toggle: Boolean
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 21px;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b3b3b3;
  border: #fff3e3 1px solid;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.slider:before {
  position: absolute;
  content: '';
  height: 15px;
  width: 15px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

input:checked + .slider {
  background-color: #ff8a00;
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(255, 215, 163);
}

input:checked + .slider:before {
  -webkit-transform: translateX(21px);
  -ms-transform: translateX(21px);
  transform: translateX(21px);
}
</style>
=======
<template>
  <label class="switch">
    <input type="checkbox" />
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
  width: 42px;
  height: 21px;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b3b3b3;
  border: #fff3e3 1px solid;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.slider:before {
  position: absolute;
  content: '';
  height: 15px;
  width: 15px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

input:checked + .slider {
  background-color: #ff8a00;
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(255, 215, 163);
}

input:checked + .slider:before {
  -webkit-transform: translateX(21px);
  -ms-transform: translateX(21px);
  transform: translateX(21px);
}
</style>
>>>>>>> 8066f5903452191a481a888af084f80f07642b87
