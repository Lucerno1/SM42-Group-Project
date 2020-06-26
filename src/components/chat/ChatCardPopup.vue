<template>
  <div class="popupWrapper">
    <div class="chatTaskPopup">
      <div class="card-header">
        <span class="orange-big-text">Card Subject</span>
        <span class="white-text card-type">Request</span>
      </div>
      <p class="description">Lorem ipsum dolor setamet</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.card-header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.popupWrapper {
  height: 100vh;
  padding-top: 35px;
  backdrop-filter: blur(2px);
}

.chatTaskPopup {
  position: relative;
  margin: 40px auto 10px auto;
  height: fit-content;
  min-height: 20vh;
  width: 80vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  background: white;
  padding: 20px;
}

.card-type {
  background: #ff8a00;
  padding: 5px 10px;
  border-radius: 20px;
}

.description {
  margin-top: 20px;
}
</style>
