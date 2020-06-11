<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  font-family: 'Lato';
  font-size: 10pt;
}

h1 {
  color: white;
  font-size: 13pt;
  font-family: 'Lato';
  font-weight: 600;
}

h2 {
  color: #ff8a00;
  font-size: 13pt;
  font-family: 'Lato';
  font-weight: 600;
  margin: 0;
}

h3{
  color: rgb(100, 100, 100);
  font-size: 11pt;
  font-family: 'Lato';
  font-weight: 700;
  margin: 0;
}

h4{
  color: rgb(148, 148, 148);
  font-size: 11pt;
  font-family: 'Lato';
  font-weight: 600;
  margin: 0;
}

body{
  background-color: #FFF2E2;
}
</style>
