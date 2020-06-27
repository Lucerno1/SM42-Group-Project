<template>
  <button :type="type" :class="'btn ' + textColor + ' ' + btnStyle">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    type: String,
    name: String,
    textColor: String,
    btnStyle: String
  }
}
</script>

<style scoped>
.btn {
  background: transparent;
  border-radius: 60px;
  padding: 12px 0;
  width: 120px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.primary {
  background: #ff8a00;
  border: solid #ff8a00 2px;
}
.primary:hover {
  background: #e67a00;
  border: solid #e67a00 2px;
  transition: 0.2s ease-in-out;
}
.secondary {
  background: #fff2e2;
  border: solid #ff8a00 2px;
}
.secondary:hover {
  background: #ff8a00;
  color: #ffffff;
  transition: 0.2s ease-in-out;
}
.primaryLogin {
  background: #ff8a00;
  border: #fff 2px solid;
  justify-self: end;
}
.primaryLogin:hover {
  background: #fff;
  color: #ff8a00;
  transition: 0.2s ease-in-out;
}
.secondaryLogin {
  background: #fff;
  border: #fff 2px solid;
  justify-self: start;
}
.secondaryLogin:hover {
  background: rgb(228, 228, 228);
  border: solid 2px rgb(228, 228, 228);
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
