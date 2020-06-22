<template>
  <div id="register">
    <TopBar pageTitle="Register"></TopBar>
    <div class="register-box">
      <img src="/img/Logo-LocalBuddy.svg" alt="Local Buddy Logo" />
      <form id="register-form" @submit.prevent="registerUser">
        <InputGrid
          grid="double"
          columns="repeat(auto-fit, minmax(130px, 1fr))"
          :mgb="11"
        >
          <Input
            v-for="(field, index) in fields1"
            :key="'field:' + index"
            :type="field.type"
            :name="field.name"
            :placeholder="field.placeholder"
            v-model="field.value"
          />
        </InputGrid>
        <InputGrid grid="single" columns="100%" :mgb="35">
          <select
            form="register-form"
            name="nationality"
            v-model="selectedNationality"
            required
          >
            <option :value="null" disabled>Nationality</option>
            <option
              v-for="country in countries"
              :key="country.id"
              :value="{ id: country.id, name: country.name }"
            >
              {{ country.name }}
            </option>
          </select>
          <Input
            v-for="(field, index) in fields2"
            :key="'field:' + index"
            :type="field.type"
            :name="field.name"
            :placeholder="field.placeholder"
            v-model="field.value"
          />
        </InputGrid>
        <InputGrid
          grid="double"
          columns="repeat(auto-fit, minmax(120px, 1fr))"
          :mgb="30"
        >
          <SecondaryButton
            id="signInButton"
            :function-name="redirect"
            name="Sign in"
          ></SecondaryButton>
          <PrimaryButton id="registerButton" value="Register" type="submit" />
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
import Input from '@/components/input/Input'
import InputGrid from '@/components/input/InputGrid'
import PrimaryButton from '@/components/bigButtons/PrimaryButton'
import SecondaryButton from '@/components/bigButtons/SecondaryButton'
import TopBar from '@/components/topbar/TopBar.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      selectedNationality: null,
      fields1: [
        {
          type: 'text',
          name: 'firstname',
          placeholder: 'Firstname',
          value: ''
        },
        {
          type: 'text',
          name: 'lastname',
          placeholder: 'Lastname',
          value: ''
        }
      ],
      fields2: [
        {
          type: 'text',
          name: 'username',
          placeholder: 'Username',
          value: ''
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          value: ''
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Confirm password',
          value: ''
        },
        {
          type: 'text',
          name: 'postalcode',
          placeholder: 'Postal code',
          value: ''
        }
      ],
      countries: [
        { id: 1, name: 'Albania' },
        { id: 2, name: 'Morocco' },
        { id: 3, name: 'Sweden' },
        { id: 4, name: 'The Netherlands' }
      ],
      errors: []
    }
  },
  methods: {
    ...mapActions('user', ['register']),
    redirect() {
      this.$router.push('Login')
    },
    registerUser() {
      if (this.validateForm()) {
        const usr = {
          username: this.fields2[0].value,
          password: this.fields2[1].value,
          firstname: this.fields1[0].value,
          lastname: this.fields1[1].value
        }
        if (this.fields2[3].value.length > 0) {
          usr.pc = this.fields2[3].value
        }
        if (this.selectedNationality !== null) {
          usr.nationality = this.selectedNationality.name
        }
        this.register(usr)

        this.$router.push('Task')
      }
    },
    validateForm: function () {
      this.errors = []
      if (
        this.fields1[0].value.length > 25 ||
        this.fields1[0].value.length < 2
      ) {
        this.errors.push('Firstname must be between 2 and 25 characters')
      }
      if (
        this.fields1[1].value.length > 30 ||
        this.fields1[1].value.length < 2
      ) {
        this.errors.push('Lastname must be between 2 and 30 characters')
      }
      if (
        this.fields2[0].value.length > 30 ||
        this.fields2[0].value.length < 3
      ) {
        this.errors.push('Username must be between 3 and 30 characters')
      }
      if (
        this.fields2[1].value.length > 30 ||
        this.fields2[1].value.length < 5
      ) {
        this.errors.push('Password must be between 5 and 30 characters')
      }
      if (this.fields2[1].value !== this.fields2[2].value) {
        this.errors.push('Passwords must match')
      }
      if (this.fields2[3].value.length !== 6) {
        this.errors.push('Postal code must be 6 characters')
      }
      if (!this.errors.length) {
        return true
      }
    }
  },
  components: { Input, InputGrid, PrimaryButton, SecondaryButton, TopBar }
}
</script>

<style scoped>
#register {
  position: relative;
  width: 100vw;
  height: 100vh;
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

#signInButton {
  justify-self: end;
}

#registerButton {
  justify-self: start;
}

select {
  background: #ffffff;
  height: 50px;
  padding: 11px;
  border-radius: 8px;
  border: none;
  outline: none;
  background-image: url('/img/dropdown_arrow.svg');
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-position: right 20px center;
}

select:focus {
  outline-color: #ff8a00;
}
</style>
