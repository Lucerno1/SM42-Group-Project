<template>
  <input type="submit" class="btn" :value="value" />
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    value: String
  }
}
</script>

<style scoped>
.btn {
  font-size: 20px;
  font-weight: bold;
  background: #ff8a00;
  border: solid #ff8a00 2px;
  border-radius: 60px;
  padding: 12px 0;
  width: 120px;
  cursor: pointer;
  color: #ffffff;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  background: #e67a00;
  border: solid #e67a00 2px;
  transition: 0.2s ease-in-out;
}

@media only screen and (min-width: 340px) {
  .btn {
    width: 135px;
  }
}

@media only screen and (min-width: 375px) {
  .btn {
    width: 145px;
  }
}
</style>
