<template>
  <div>
    <TopBarCardCreation pageTitle="Card Creation"></TopBarCardCreation>
    <div class="wrapper">
      <span class="orange-big-text">Create a {{ type }} card</span>
    </div>
    <InputGrid class="mt-147" grid="single" columns="100%" :mgb="35">
      <Input
        type="text"
        name="Subject"
        placeholder="Subject"
        v-model="subject"
      />

      <Textarea
        name="description"
        rows="5"
        :placeholder="'Write your ' + type + ' in here'"
        v-model="description"
      />

      <div class="center">
        <MainButton
          type="button"
          name="Create"
          textColor="white-big-text"
          btnStyle="primary"
          id="createQuestionCard"
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
import Textarea from '@/components/input/Textarea'
import MainButton from '@/components/MainButton'
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
        title: this.subject,
        text: this.description,
        type: this.type.charAt(0).toUpperCase() + this.type.slice(1)
      })
      this.$router.push('Tasks')
    }
  },
  components: { TopBarCardCreation, Input, InputGrid, MainButton, Textarea },
  data() {
    return {
      subject: '',
      description: ''
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
