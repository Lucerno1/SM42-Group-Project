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

      <div class="error-box">
        <ul v-if="errors.length">
          <li class="white-text" v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>

      <InputGrid
        grid="double"
        columns="repeat(auto-fit, minmax(120px, 1fr))"
        :mgb="30"
      >
        <router-link to="/register" class="s-btn-wrap">
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
    <button role="button" @click="installPWA" id="installButton">
      <div class="prompt-box">
        <download-icon size="1.3x"></download-icon>
        <p>INSTALL</p>
      </div>
    </button>
  </div>
</template>

<script>
import Input from '@/components/input/Input.vue'
import InputGrid from '@/components/input/InputGrid.vue'
import MainButton from '@/components/MainButton.vue'
import pwaInstallHandler from 'pwa-install-handler'
import { DownloadIcon } from 'vue-feather-icons'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    MainButton,
    Input,
    InputGrid,
    DownloadIcon
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
          this.errors.push('Username or password were incorrect')
          return
        }
        this.$router.push('Task')
      })
    },
    installPWA() {
      pwaInstallHandler.install().then((isInstalled) => {
        window.console.log(
          isInstalled ? 'Install accepted' : 'Install declined'
        )
      })
    }
  },
  mounted() {
    pwaInstallHandler.addListener((canInstall) => {
      window.console.log(canInstall)
      document.getElementById('installButton').style.display = canInstall
        ? 'inline-block'
        : 'none'
    })
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
  opacity: 0.6;
  font-size: 0.9rem;
}

.error-box {
  height: 45px;
  line-height: 40px;
}

#installButton {
  display: none;
  position: absolute;
  right: 0;
  outline: none;
  border: none;
  border-radius: 50px;
  margin: 60px 40px 0 0;
  background: #fff;
  color: #ff8a00;
  font-size: 0.95rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.prompt-box {
  height: 30px;
  padding: 1px 7px;
  display: flex;
  align-items: center;
}

.prompt-box p {
  margin-left: 3px;
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

  #installButton {
    margin: 20px 10px 0 0;
  }
}
</style>
