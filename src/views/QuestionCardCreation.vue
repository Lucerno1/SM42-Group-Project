<template>
  <div>
    <TopBar pageTitle="Card Creation"></TopBar>
    <div class="wrapper">
      <h2>Create a question card</h2>
    </div>
    <InputGrid class="mt-147" grid="single" columns="100%" :mgb="35">
      <Input
        v-for="(field, index) in fields"
        :key="'field:' + index"
        :type="field.type"
        :name="field.name"
        :placeholder="field.placeholder"
        v-model="field.value"
      />
      <div class="center">
        <PrimaryButton id="createQuestionCard" value="Create" />
      </div>
    </InputGrid>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import Input from '@/components/input/Input'
import InputGrid from '@/components/input/InputGrid'
import PrimaryButton from '@/components/bigButtons/PrimaryButton'

export default {
  name: 'TaskOverview',
  components: { TopBar, Input, InputGrid, PrimaryButton },
  data() {
    return {
      fields: [
        {
          type: 'text',
          name: 'subject',
          placeholder: 'Subject',
          value: ''
        },
        {
          type: 'text',
          name: 'question',
          placeholder: 'Write your question in here.',
          value: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 80vw;
  margin: 0 10vw;
  top: 120px;
  position: relative;
}

.mt-147 {
  padding-top: 147px;
}

.center {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
