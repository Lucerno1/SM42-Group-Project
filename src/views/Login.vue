<template>
  <div class="login">

    <div class="logo">
      <img src="" alt="Logo" srcset="">
    </div>


    <form action="" id="loginForm">
      <input
        type="text"
        name="username"
        id="usernameField"
        placeholder="Username..."
      />

      <input
        type="password"
        name="password"
        id="passwordField"
        placeholder="Password..."
      />

      <a id="forgotPassword" href="">Forgot password?</a>

      <div class="buttons">
        <button id="signup" class="btn negative">Sign up</button>
        <button id="signin" class="btn">Sign in</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

.login {
  font-family: 'Lucida Sans'; /* !!!Change to Lato */
  background-color: #FFF2E2;
  margin: 0;
  height: 100vh;
  margin: -8px;
  padding: 0 10%;
}

.statusbar {
  width: 100%;
  height: 44px;
  background-color: #FF8A00;
}

.logo {
  background-color: red;
  height: 300px;
  margin-bottom: 50px;
}

#loginForm {
  font-size: 14pt;
  width: 100%;
}

#loginForm input {
  width: -webkit-fill-available;
  font-size: 14pt;
  height: 50px;
  border-radius: 9px;
  border: none;
  margin: 0 0 10px;
  padding: 0 20px;
}

#forgotPassword {
  float: right;
  color:#454545;
  text-decoration: none;
}

.buttons {
  padding: 20px 0;
  width: 100%;
  display: flex;
}

.btn {
  background-color: #FF8A00;
  height: 50px;
  width: 145px;
  border-radius: 43px;
  border: none;
  color: #FFFFFF;
  font-size: 14pt;
  margin-left: auto;
}

.btn.negative {
  background-color: #FFF2E2;
  border: 2px solid #FF8A00;
  color: #FF8A00;
  margin-right: auto;
}
</style>
