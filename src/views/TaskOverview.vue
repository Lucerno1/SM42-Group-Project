<template>
  <div>
    <TopBar pageTitle="My Requests & Questions"></TopBar>
    <div class="wrapper pb-100">
      <!-- Requests Section -->
      <div class="requests">
        <span class="orange-big-text">Requests</span>
        <router-link :to="{ name: 'RequestCardCreation' }">
          <plus-circle-icon size="1.5x" class="orangeIcon" />
        </router-link>
      </div>
      <CardButton
        v-for="(request, index) in requests"
        :key="'request' + index"
        :title="request.title"
      ></CardButton>

      <!-- Questions Section -->
      <div class="questions">
        <span class="orange-big-text">Questions</span>
        <router-link :to="{ name: 'QuestionCardCreation' }">
          <plus-circle-icon size="1.5x" class="orangeIcon" />
        </router-link>
      </div>
      <CardButton
        v-for="(question, index) in questions"
        :key="'question' + index"
        :title="question.title"
      ></CardButton>
    </div>
  </div>
</template>

<script>
import { PlusCircleIcon } from 'vue-feather-icons'
import TopBar from '@/components/topbar/TopBar'
import CardButton from '@/components/CardButton'

export default {
  name: 'TaskOverview',
  components: { TopBar, PlusCircleIcon, CardButton },
  data() {
    return {
      questions: [
        {
          title: 'Helping with taxes'
        },
        {
          title: 'Translating a letter'
        },
        {
          title: 'Practising dutch'
        },
        {
          title: 'Moving furniture'
        }
      ],
      requests: [
        {
          title: 'Helping with groceries'
        },
        {
          title: 'Guide to the local pubs'
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

.requests {
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.questions {
  margin-top: 40px;
  margin-bottom: 20px;
  margin-right: 15px;
  display: flex;
  justify-content: space-between;
}

.orangeIcon {
  color: #ff8a00;
}

.pb-100 {
  padding-bottom: 100px;
}
</style>
