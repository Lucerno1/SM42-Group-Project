<template>
  <textarea 
    class="textarea"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
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
  props: {
    type: String,
    name: String,
    placeholder: String,
    value: String,
    rows: String,

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

.textarea {
  background: #ffffff;
  padding: 15px;
  border-radius: 8px;
  border: none;
  max-width: 90vw;
  resize: vertical;
  font-family: inherit;
  font-weight: 600;
}

input:focus {
  outline-color: #ff8a00;
}
</style>
