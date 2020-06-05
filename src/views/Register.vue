<template>
  <div id="register">
    <div class="register-box">
      <img src="/img/Logo-LocalBuddy.svg" alt="Local Buddy Logo" />
      <form
        id="register-form"
        @submit="validateForm"
        action="/task"
        method="post"
      >
        <InputGrid columns="repeat(auto-fit, minmax(130px, 1fr))" :mgb="11">
          <Input
            v-for="(field, index) in fields1"
            :key="'field:' + index"
            :type="field.type"
            :name="field.name"
            :placeholder="field.placeholder"
          />
        </InputGrid>
        <InputGrid columns="100%" :mgb="35">
          <select name="nationality" required>
            <option disabled selected value>Nationality</option>
            <option>Morocco</option>
            <option>Turkey</option>
            <option>Zwahili</option>
          </select>
          <Input
            v-for="(field, index) in fields2"
            :key="'field:' + index"
            :type="field.type"
            :name="field.name"
            :placeholder="field.placeholder"
          />
        </InputGrid>
        <InputGrid columns="repeat(auto-fit, minmax(130px, 1fr))" :mgb="30">
          <button @click="redirect()" class="btn btn-signin">Sign in</button>
          <input type="submit" value="Register" class="btn btn-register" />
        </InputGrid>
        <span v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import InputGrid from '@/components/InputGrid'

export default {
  name: 'Register',
  data() {
    return {
      fields1: [
        {
          type: 'text',
          name: 'firstname',
          placeholder: 'Firstname'
        },
        {
          type: 'text',
          name: 'lastname',
          placeholder: 'Lastname'
        }
      ],
      fields2: [
        {
          type: 'text',
          name: 'username',
          placeholder: 'Username'
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password'
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Confirm password'
        },
        {
          type: 'text',
          name: 'postalcode',
          placeholder: 'Postal code'
        }
      ],
      errors: []
      // firstname: null,
      // lastname: null,
      // nationality: null,
      // username: null,
      // password: null,
      // password2: null,
      // postalcode: null
    }
  },
  methods: {
    redirect() {
      this.$router.push('Task')
    },
    validateForm: function (e) {
      this.errors = []
      if (this.firstname.length > 25 || this.firstname.length < 2) {
        this.errors.push('Firstname must be between 2 and 25 characters')
      }
      if (this.lastname.length > 30 || this.lastname.length < 2) {
        this.errors.push('Lastname must be between 2 and 30 characters')
      }
      if (this.username.length > 30 || this.username.length < 3) {
        this.errors.push('Username must be between 3 and 30 characters')
      }
      if (this.password.length > 30 || this.password.length < 5) {
        this.errors.push('Password must be between 5 and 30 characters')
      }
      if (this.password !== this.password2) {
        this.errors.push('Passwords must match')
      }
      if (this.postalcode.length !== 6) {
        this.errors.push('Postal code must be 6 characters')
      }
      if (!this.errors.length) {
        return true
      }
      e.preventDefault()
    }
  },
  components: { Input, InputGrid }
}
</script>

<style scoped>
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

select {
  background: #ffffff;
  height: 22px;
  padding: 15px;
  border-radius: 8px;
  border: none;
}

select {
  padding: 11px;
  height: 50px;
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
