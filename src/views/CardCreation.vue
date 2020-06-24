<template>
  <div>
    <TopBarCardCreation pageTitle="Card Creation"></TopBarCardCreation>
    <div class="wrapper">
      <span class="orange-big-text">Create a {{ type }} card</span>
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
        <PrimaryButton
          id="createQuestionCard"
          value="Create"
          @click.native="createCard"
        />
      </div>
    </InputGrid>
  </div>
</template>

<script>
import TopBarCardCreation from '@/components/topbar/TopBarCardCreation'
import Input from '@/components/input/Input'
import InputGrid from '@/components/input/InputGrid'
import PrimaryButton from '@/components/bigButtons/PrimaryButton'
import { mapActions } from 'vuex'

export default {
  name: 'TaskOverview',
  props: {
    type: String
  },
  methods: {
    ...mapActions('requests', ['createRequest']),
    createCard: function () {
      this.createRequest({
        title: this.fields[0].value,
        text: this.fields[1].value,
        type: this.type.charAt(0).toUpperCase() + this.type.slice(1)
      })
    }
  },
  components: { TopBarCardCreation, Input, InputGrid, PrimaryButton },
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
          name: this.type,
          placeholder: 'Write your ' + this.type + ' in here.',
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
