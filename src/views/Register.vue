<template>
  <div id="register">
    <TopBar pageTitle="Register"></TopBar>
    <div class="register-box">
      <img src="img\Logo-LocalBuddyRegister.svg" alt="Local Buddy Logo" />
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
        <InputGrid grid="single" columns="100%">
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
        <div class="error-box">
          <ul v-if="errors.length">
            <li class="orange-text" v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
        <InputGrid grid="double" columns="repeat(auto-fit, minmax(120px, 1fr))">
          <SecondaryButton
            id="signInButton"
            :function-name="redirect"
            name="Sign in"
          ></SecondaryButton>
          <PrimaryButton id="registerButton" value="Register" type="submit" />
        </InputGrid>
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
        { id: 1, name: 'Afghanistan' },
        { id: 2, name: 'Albania' },
        { id: 3, name: 'Algeria' },
        { id: 4, name: 'Angola' },
        { id: 5, name: 'Argentina' },
        { id: 6, name: 'Armenia' },
        { id: 7, name: 'Australia' },
        { id: 8, name: 'Austria' },
        { id: 9, name: 'Azerbaijan' },
        { id: 10, name: 'Bangladesh' },
        { id: 11, name: 'Belarus' },
        { id: 12, name: 'Belgium' },
        { id: 13, name: 'Benin' },
        { id: 14, name: 'Bolivia' },
        { id: 15, name: 'Bosnia and Herzegovina' },
        { id: 16, name: 'Botswana' },
        { id: 17, name: 'Angola' },
        { id: 18, name: 'Brazil' },
        { id: 19, name: 'Bulgaria' },
        { id: 20, name: 'Burundi' },
        { id: 21, name: 'Cambodia' },
        { id: 22, name: 'Cameroon' },
        { id: 23, name: 'Canada' },
        { id: 24, name: 'Chile' },
        { id: 25, name: 'China' },
        { id: 26, name: 'Colombia' },
        { id: 27, name: 'Congo' },
        { id: 28, name: 'Costa Rica' },
        { id: 29, name: 'Croatia' },
        { id: 30, name: 'Cuba' },
        { id: 31, name: 'Cyprus' },
        { id: 32, name: 'Czech Republic' },
        { id: 33, name: "Côte d'Ivoire" },
        { id: 34, name: 'Denmark' },
        { id: 35, name: 'Dominican Republic' },
        { id: 36, name: 'DR Congo' },
        { id: 37, name: 'Ecuador' },
        { id: 38, name: 'Egypt' },
        { id: 39, name: 'El Salvador' },
        { id: 40, name: 'Eritrea' },
        { id: 41, name: 'Estonia' },
        { id: 42, name: 'Ethiopia' },
        { id: 43, name: 'Finland' },
        { id: 44, name: 'France' },
        { id: 45, name: 'Gabon' },
        { id: 46, name: 'Gambia' },
        { id: 47, name: 'Georgia' },
        { id: 48, name: 'Germany' },
        { id: 49, name: 'Ghana' },
        { id: 50, name: 'Greece' },
        { id: 51, name: 'Guatemala' },
        { id: 52, name: 'Guinea' },
        { id: 53, name: 'Haiti' },
        { id: 54, name: 'Honduras' },
        { id: 55, name: 'Hungary' },
        { id: 56, name: 'Iceland' },
        { id: 57, name: 'India' },
        { id: 58, name: 'Indonesia' },
        { id: 59, name: 'Iran' },
        { id: 60, name: 'Iraq' },
        { id: 61, name: 'Ireland' },
        { id: 62, name: 'Israel' },
        { id: 63, name: 'Italy' },
        { id: 64, name: 'Jamaica' },
        { id: 65, name: 'Japan' },
        { id: 66, name: 'Jordan' },
        { id: 67, name: 'Kazakhstan' },
        { id: 68, name: 'Kenya' },
        { id: 69, name: 'Kuwait' },
        { id: 70, name: 'Latvia' },
        { id: 71, name: 'Lebanon' },
        { id: 72, name: 'Liberia' },
        { id: 73, name: 'Libya' },
        { id: 74, name: 'Lithuania' },
        { id: 75, name: 'Luxembourg' },
        { id: 76, name: 'Madagascar' },
        { id: 77, name: 'Malawi' },
        { id: 78, name: 'Malaysia' },
        { id: 79, name: 'Maldives' },
        { id: 80, name: 'Mali' },
        { id: 81, name: 'Malta' },
        { id: 82, name: 'Mexico' },
        { id: 83, name: 'Moldova' },
        { id: 84, name: 'Mongolia' },
        { id: 85, name: 'Montenegro' },
        { id: 86, name: 'Morocco' },
        { id: 87, name: 'Mozambique' },
        { id: 88, name: 'Myanmar' },
        { id: 89, name: 'Namibia' },
        { id: 90, name: 'Nepal' },
        { id: 91, name: 'Netherlands' },
        { id: 92, name: 'New Zealand' },
        { id: 93, name: 'Niger' },
        { id: 94, name: 'Nigeria' },
        { id: 95, name: 'North Korea' },
        { id: 96, name: 'North Macedonia' },
        { id: 97, name: 'Pakistan' },
        { id: 98, name: 'Panama' },
        { id: 99, name: 'Papua New Guinea' },
        { id: 100, name: 'Paraguay' },
        { id: 101, name: 'Peru' },
        { id: 102, name: 'Philippines' },
        { id: 103, name: 'Poland' },
        { id: 104, name: 'Portugal' },
        { id: 105, name: 'Qatar' },
        { id: 106, name: 'Romania' },
        { id: 107, name: 'Russia' },
        { id: 108, name: 'Rwanda' },
        { id: 109, name: 'Saudi Arabia' },
        { id: 110, name: 'Senegal' },
        { id: 111, name: 'Serbia' },
        { id: 112, name: 'Sierra Leone' },
        { id: 113, name: 'Singapore' },
        { id: 114, name: 'Slovakia' },
        { id: 115, name: 'Slovenia' },
        { id: 116, name: 'Somalia' },
        { id: 117, name: 'South Africa' },
        { id: 118, name: 'South Korea' },
        { id: 119, name: 'South Sudan' },
        { id: 120, name: 'Spain' },
        { id: 121, name: 'Sri Lanka' },
        { id: 122, name: 'State of Palestine' },
        { id: 123, name: 'Sudan' },
        { id: 124, name: 'Suriname' },
        { id: 125, name: 'Sweden' },
        { id: 126, name: 'Switzerland' },
        { id: 127, name: 'Syria' },
        { id: 128, name: 'Tajikistan' },
        { id: 129, name: 'Tanzania' },
        { id: 130, name: 'Thailand' },
        { id: 131, name: 'Tunisia' },
        { id: 132, name: 'Turkey' },
        { id: 133, name: 'Turkmenistan' },
        { id: 134, name: 'Uganda' },
        { id: 135, name: 'Ukraine' },
        { id: 136, name: 'United Arab Emirates' },
        { id: 137, name: 'United Kingdom' },
        { id: 138, name: 'United States' },
        { id: 139, name: 'Uruguay' },
        { id: 140, name: 'Uzbekistan' },
        { id: 141, name: 'Venezuela' },
        { id: 142, name: 'Vietnam' },
        { id: 143, name: 'Yemen' },
        { id: 144, name: 'Zambia' },
        { id: 145, name: 'Zimbabwe' }
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
        this.errors.push("Passwords don't match")
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
  outline: none;
}

#registerButton {
  justify-self: start;
  outline: none;
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

.error-box {
  padding: 15px 0;
}
</style>
