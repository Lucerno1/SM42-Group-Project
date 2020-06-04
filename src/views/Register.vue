<template>
  <div id="register">
    <div class="register-flex">
      <img src="/img/Logo-LocalBuddy.svg" alt="" />
      <input type="text" placeholder="Firstname" />
      <input type="text" placeholder="Lastname" />
      <input type="text" placeholder="Nationality" />
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <input type="text" placeholder="Confirm password" />
      <input type="text" placeholder="Postal code" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>
#register {
  background: #fff2e2;
  width: 100vw;
  height: 100vh;
  position: relative;
}

/* .register-grid {
  position: absolute;
  height: 82%;
  width: 100%;
  bottom: 0;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  grid-gap: 15px;
} */

.register-flex {
  position: absolute;
  display: flex;
  height: 82%;
  width: 100%;
  bottom: 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
}

.logo-localBuddy {
  flex-grow: 2;
}

input {
  margin-top: 10px;
  background: #ffffff;
  padding: 15px;
  height: 3%;
  width: 80%;
  border-radius: 8px;
  border: none;
}
</style>
