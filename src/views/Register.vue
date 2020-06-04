<template>
  <div id="register">
    <div class="register-box">
      <img src="/img/Logo-LocalBuddy.svg" alt="Local Buddy Logo" />
      <div class="grid register-grid1">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          v-model="firstname"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          v-model="lastname"
        />
      </div>
      <div class="grid register-grid2">
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          v-model="nationality"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          v-model="username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="password"
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm password"
          v-model="password2"
        />
        <input
          type="text"
          name="postalcode"
          placeholder="Postal code"
          v-model="postalcode"
        />
      </div>
      <div class="grid register-grid3">
        <button @click="redirect()" class="btn btn-signin">Sign in</button>
        <button
          @click="fieldsFilled ? validateFields() : null"
          class="btn btn-register"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      fieldsFilled: true,
      firstname: null,
      lastname: null,
      nationality: null,
      username: null,
      password: null,
      password2: null,
      postalcode: null
    }
  },
  methods: {
    redirect() {
      this.$router.push('Task')
    },
    validateFields() {
      if (
        this.firstname &&
        this.lastname &&
        this.nationality &&
        this.username &&
        this.password &&
        this.password2 &&
        this.postalcode != ''
      ) {
        this.$router.push('Task')
      }
    }
  }
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

input:focus {
  outline-color: #ff8a00;
}

.btn {
  font-size: 20px;
  font-weight: bold;
  background: #fff2e2;
  border: solid #ff8a00 2px;
  border-radius: 60px;
  padding: 12px 0;
  cursor: pointer;
}

.btn-signin {
  background: #fff2e2;
  color: #ff8a00;
  transition: 0.2s ease-in-out;
}

.btn-signin:hover {
  background: #ff8a00;
  color: #ffffff;
  transition: 0.2s ease-in-out;
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
