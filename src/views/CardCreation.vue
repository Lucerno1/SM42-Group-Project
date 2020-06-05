<template>
  <div>
    <TopBar pageTitle="Card Creation"></TopBar>
    <div class="wrapper">
      <!-- Requests Section -->
      <div class="requests">
        <h2>Requests</h2>
        <plus-circle-icon size="1.5x" class="orangeIcon"></plus-circle-icon>
      </div>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>

      <!-- Questions Section -->
      <div class="questions">
        <h2>Questions</h2>
        <plus-circle-icon size="1.5x" class="orangeIcon"></plus-circle-icon>
      </div>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
      <CardButton></CardButton>
    </div>
  </div>
</template>

<script>
import { PlusCircleIcon } from 'vue-feather-icons'
import TopBar from '@/components/topbar/TopBar'
import CardButton from '@/components/CardButton'

export default {
  name: 'TaskOverview',
  components: { TopBar, PlusCircleIcon, CardButton }
}
</script>

<style>
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
</style>
