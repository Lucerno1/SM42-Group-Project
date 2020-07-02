<template>
  <input
    :type="type"
    :name="name"
    :placeholder="placeholder"
    v-model="content"
    @input="handleInput"
    required
  />
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      content: this.value
    }
  },
  watch: {
    value: function () {
      this.content = this.value
    }
  },
  props: {
    type: String,
    name: String,
    placeholder: String,
    value: String
  },
  methods: {
    handleInput() {
      this.$emit('input', this.content)
    }
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
  box-shadow: 0 0 0 2px #ff8a00;
  outline-width: 0;
}
</style>
