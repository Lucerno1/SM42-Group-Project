<template>
  <div class="login">
    <TopBar pageTitle="Sign in" />
    <div class="content">
      <div class="logo">
      </div>

      <InputGrid grid="login">
        <Input type="text" placeholder="Username..." />
        <Input type="text" placeholder="Password..." />
      </InputGrid>
      <a id="forgotPassword" href="">Forgot password?</a>

      <div class="buttons">
        <SecondaryButton id="secondary" name="sign up" />
        <PrimaryButton value="sign in" />
      </div>
    </div>
  </div>  
</template>

<script>
import TopBar from '@/components/topbar/TopBar.vue'
import Input from '@/components/input/Input.vue'
import InputGrid from '@/components/input/InputGrid.vue'
import PrimaryButton from '@/components/bigButtons/PrimaryButton.vue'
import SecondaryButton from '@/components/bigButtons/SecondaryButton.vue'

export default {
  name: 'Login',
  components: {
    TopBar,
    PrimaryButton,
    SecondaryButton,
    Input,
    InputGrid
  }
}
</script>

<style scoped>
.content {
  background-color: #fff2e2;
  height: 100%;
  padding: 0 10%;
  margin-top: 160px;
}

.title {
  width: 100%;
  height: 50px;
  background-color: #ff8a00;
}

.logo {
  border: 2px dashed #ff8a00;
  height: 300px;
  margin-bottom: 50px;
}

.grid.login {
  width: 100%;
  justify-content: unset;
}

#forgotPassword {
  float: right;
  color: #454545;
  text-decoration: none;
  margin-top: 10px;
}

.buttons {
  padding: 20px 0;
  width: 100%;
  display: flex;
}

#secondary {
  margin-right: 10px;
}

</style>
