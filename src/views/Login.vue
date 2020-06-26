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
        <SecondaryButton
          class="s-btn"
          id="secondary"
          name="Register"
          :function-name="toRegister"
        />
        <PrimaryButton
          class="p-btn"
          value="Sign in"
          @click.native="signInUser"
        />
      </InputGrid>
    </div>
  </div>
</template>

<script>
import Input from '@/components/input/Input.vue'
import InputGrid from '@/components/input/InputGrid.vue'
import PrimaryButton from '@/components/bigButtons/PrimaryButton.vue'
import SecondaryButton from '@/components/bigButtons/SecondaryButton.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    PrimaryButton,
    SecondaryButton,
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

.s-btn {
  background: #ff8a00;
  border: #fff 2px solid;
  color: #fff;
  justify-self: end;
}

.s-btn:hover {
  background: #fff;
  border: solid #fff 2px;
  color: #ff8a00;
}

.p-btn {
  background: #fff;
  border: #fff 2px solid;
  color: #ff8a00;
  justify-self: start;
}

.p-btn:hover {
  background: rgb(228, 228, 228);
  border: solid 2px rgb(228, 228, 228);
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
