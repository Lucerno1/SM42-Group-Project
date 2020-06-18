<template>
  <div class="content">
    <TopBar class="topbar" pageTitle="Account Settings"></TopBar>
    <div class="inner-content">
      <h2>Change your account info</h2>
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
      <PrimaryButton />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import InputGrid from '@/components/input/InputGrid'
import Input from '@/components/input/Input'
import PrimaryButton from '@/components/bigButtons/PrimaryButton'
export default {
  name: 'AccountSettings',
  components: {
    TopBar,
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
  text-align: center;
  position: relative;
  top: 0;
}
.inner-content {
  position: absolute;
  top: 100px;
  width: 100%;
  margin: 0 0 85px 0;
}
.topbar {
  position: absolute;
  width: 100%;
}
.custom-grid {
  padding: 30px 0;
}
</style>
