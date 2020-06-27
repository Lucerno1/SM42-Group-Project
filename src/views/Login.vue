<template>
  <div id="login">
    <div class="login-box">
      <img src="img\Logo-LocalBuddyLogin.svg" alt="Local Buddy Logo" />

      <div class="input-box">
        <InputGrid grid="single" columns="100%">
          <Input type="text" placeholder="Username..." v-model="username" />
          <Input type="password" placeholder="Password..." v-model="password" />
        </InputGrid>
        <span class="white-text" id="forgotPassword" href=""
          >Forgot password?</span
        >
      </div>

      <span v-if="errors.length">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </span>

      <InputGrid
        grid="double"
        columns="repeat(auto-fit, minmax(120px, 1fr))"
        :mgb="30"
      >
        <router-link to="/register">
          <MainButton
            type="button"
            name="Register"
            textColor="white-big-text"
            btnStyle="primaryLogin"
          />
        </router-link>
        <MainButton
          type="submit"
          name="Sign in"
          textColor="orange-big-text"
          btnStyle="secondaryLogin"
          @click.native="signInUser"
        />
      </InputGrid>
    </div>
  </div>
</template>

<script>
import Input from '@/components/input/Input.vue'
import InputGrid from '@/components/input/InputGrid.vue'
import MainButton from '@/components/MainButton.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    MainButton,
    Input,
    InputGrid
  },
  data() {
    return {
      errors: [],
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    toRegister() {
      this.$router.push('Register')
    },
    signInUser() {
      const credentials = {
        username: this.username,
        password: this.password
      }
      this.login(credentials).then((suc) => {
        if (!suc) {
          this.errors = []
          this.errors.push('You could not be logged in')
          return
        }
        this.$router.push('Task')
      })
    }
  }
}
</script>

<style scoped>
#login {
  position: relative;
  background: #ff8a00;
  width: 100vw;
  height: 100vh;
}

.login-box {
  position: absolute;
  height: 80%;
  width: 100%;
  bottom: 0;
  text-align: center;
  transition: 0.3s ease-in-out;
}

.login-box img {
  margin-bottom: 55px;
}

.input-box {
  width: 100%;
  position: relative;
}

.s-btn-wrap {
  text-align: end;
}

#forgotPassword {
  display: block;
  margin: 0 auto;
  text-align: right;
  width: 80%;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 40px;
  opacity: 0.6;
  font-size: 0.9rem;
}

@media only screen and (min-width: 700px) {
  #forgotPassword {
    width: 560px;
  }
}

@media only screen and (max-height: 620px) {
  .login-box {
    height: 92%;
  }
}
</style>
