<template>
  <div id="register">
    <div class="register-box">
      <img src="/img/Logo-LocalBuddy.svg" alt="Local Buddy Logo" />
      <div class="grid register-grid1">
        <input type="text" name="firstname" placeholder="Firstname" />
        <input type="text" name="lastname" placeholder="Lastname" />
      </div>
      <div class="grid register-grid2">
        <input type="text" name="nationality" placeholder="Nationality" />
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="password2" placeholder="Confirm password" />
        <input type="text" name="postalcode" placeholder="Postal code" />
      </div>
      <div class="grid register-grid3">
        <Button class="btn btn-signin">Sign in</Button>
        <Button class="btn btn-register">Register</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Register',
  components: { Button }
}
</script>

<style scoped>
::placeholder {
  color: #a6a6a6;
}

#register {
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: 'Lato';
}

.register-box {
  position: absolute;
  height: 82%;
  width: 100%;
  bottom: 0;
  text-align: center;
}

.register-box img {
  margin-bottom: 30px;
}

.grid {
  display: grid;
  width: 80%;
  justify-content: center;
  grid-gap: 11px;
  margin: 0 auto;
}

.register-grid1 {
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  margin-bottom: 11px;
}

.register-grid2 {
  grid-template-columns: 100%;
  margin-bottom: 35px;
}

.register-grid3 {
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  margin-bottom: 30px;
}

input {
  background: #ffffff;
  height: 22px;
  padding: 15px;
  border-radius: 8px;
  border: none;
}

.btn {
  font-size: 20px;
  font-weight: bold;
  background: #fff2e2;
  border: solid #ff8a00 2px;
  border-radius: 60px;
  padding: 12px 0;
}

.btn-signin {
  color: #ff8a00;
}

.btn-register {
  color: #ffffff;
  background: #ff8a00;
}

@media only screen and (min-width: 700px) {
  .register-grid1,
  .register-grid3 {
    grid-template-columns: 275px 275px;
  }

  .register-grid2 {
    grid-template-columns: 560px;
  }
}
</style>
