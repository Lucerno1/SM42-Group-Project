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
          <Input type="text" name="Firstname" placeholder="Firstname" />
          <Input type="text" name="Lastname" placeholder="Lastname" />
        </InputGrid>
        <InputGrid columns="100%" grid="" mgb="">
          <Input type="password" name="Password" placeholder="Password" />
          <Input
            type="password"
            name="Confirm password"
            placeholder="Confirm password"
          />
        </InputGrid>
      </div>
      <div class="center"><PrimaryButton /></div>
    </div>
  </div>
</template>

<script>
import TopBarAccountSettings from '@/components/topbar/TopBarAccountSettings'
import InputGrid from '@/components/input/InputGrid'
import Input from '@/components/input/Input'
import PrimaryButton from '@/components/bigButtons/PrimaryButton'
export default {
  name: 'AccountSettings',
  components: {
    TopBarAccountSettings,
    InputGrid,
    Input,
    PrimaryButton
  },
  data: function () {
    return {
      Firstname: String,
      Lastname: String
    }
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
