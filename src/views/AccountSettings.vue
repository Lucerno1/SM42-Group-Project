<template>
  <div class="content">
    <TopBarAccountSettings pageTitle="Account Settings"></TopBarAccountSettings>
    <div class="inner-content">
      <div class="wrapper">
        <span class="orange-big-text">Change your account info</span>
      </div>
      <div class="custom-grid">
        <InputGrid
          columns="repeat(auto-fit, minmax(130px, 1fr))"
          grid=""
          mgb="11"
        >
          <Input
            v-model="vfirstname"
            type="text"
            name="Firstname"
            placeholder="Firstname"
          />
          <Input
            v-model="vlastname"
            type="text"
            name="Lastname"
            placeholder="Lastname"
          />
        </InputGrid>
        <InputGrid columns="100%" grid="" mgb="">
          <Input
            type="password"
            name="Password"
            placeholder="Password"
            v-model="vpassword"
          />
          <Input
            type="password"
            name="Confirm password"
            placeholder="Confirm password"
            v-model="vpasswordConfirm"
          /> </InputGrid
        ><span v-if="errors.length">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </span>
      </div>
      <div class="center"><PrimaryButton @click.native="submit" /></div>
    </div>
  </div>
</template>

<script>
import TopBarAccountSettings from '@/components/topbar/TopBarAccountSettings'
import InputGrid from '@/components/input/InputGrid'
import Input from '@/components/input/Input'
import PrimaryButton from '@/components/bigButtons/PrimaryButton'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AccountSettings',
  computed: {
    ...mapGetters('user', ['firstname', 'lastname'])
  },
  data() {
    return {
      errors: [],
      vfirstname: '',
      vlastname: '',
      vpassword: '',
      vpasswordConfirm: ''
    }
  },
  methods: {
    ...mapActions('user', ['updateFirstname', 'updateLastname']),
    submit: function () {
      if (this.vpassword.length > 30 || this.vpassword.length < 5) {
        this.errors.push('Password must be between 5 and 30 characters')
      }
      if (this.vpassword !== this.vpasswordConfirm) {
        this.errors.push('Password and password confirmation do not match')
      }
      if (this.errors > 0) {
        return
      }
      this.updateFirstname(this.vfirstname)
      this.updateLastname(this.vlastname)
    }
  },
  created() {
    this.vfirstname = this.firstname
    this.vlastname = this.lastname
  },
  components: {
    TopBarAccountSettings,
    InputGrid,
    Input,
    PrimaryButton
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  /* text-align: center; */
  position: relative;
  top: 0;
}
.inner-content {
  position: absolute;
  top: 100px;
  width: 100%;
  margin: 0 0 85px 0;
}

.custom-grid {
  padding: 45px 0;
}

.center {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.wrapper {
  max-width: 80vw;
  margin: 0 10vw;
  top: 20px;
  position: relative;
}
</style>
