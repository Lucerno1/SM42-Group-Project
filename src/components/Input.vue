<template>
  <input :type="type" :name="name" :placeholder="placeholder" required />
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    name: String,
    placeholder: String
  }
}
</script>

<style scoped>
::placeholder {
  color: #a6a6a6;
}

[type='text'],
[type='password'] {
  background: #ffffff;
  height: 22px;
  padding: 15px;
  border-radius: 8px;
  border: none;
}

input:focus {
  outline-color: #ff8a00;
}
</style>
