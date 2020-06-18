<template>
  <div class="installPrompt">
    <div class="title">
      <h2>Install Local Buddy</h2>
    </div>
    <div class="text">
      Install the application on your homescreen.
    </div>
    <div class="buttons">
      <SecondaryButton id="secondary" name="cancel" />
      <PrimaryButton value="Install" />
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/bigButtons/PrimaryButton.vue'
import SecondaryButton from '@/components/bigButtons/SecondaryButton.vue'

export default {
  name: 'InstallPrompt',
  components: {
    PrimaryButton,
    SecondaryButton
  },
  props: {
    state: String
  }
}
</script>

<style scoped>
.installPrompt {
  width: 100%;
  border: 2px solid #ff8a00;
  border-radius: 30px 30px 0 0;
  padding: 30px 0;
  background: #ffffff;
  position: absolute;
  bottom: -3px;
  left: -2px;
  text-align: center;
}

.text {
  padding-top: 10px;
}

.buttons {
  padding: 20px 0;
}

#secondary {
  margin-right: 10px;
}
</style>
