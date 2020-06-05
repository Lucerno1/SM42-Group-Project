<template>
  <div class="card">
    <section class="transparent"></section>
    <section class="white">
      <Row
        ><span class="avatar"></span>
        <div class="nameWrapper">
          <Row
            ><span class="orange-text name">{{ name }}</span></Row
          >
          <Row
            ><span class="grey-text origin">{{ origin }}</span></Row
          >
        </div></Row
      >
      <p class="profile">{{ profile }}</p>
    </section>
    <section class="wave">
      <svg
        width="100%"
        viewBox="0 0 270 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H270V40H0L0 0Z" fill="white" />
        <path
          d="M0 40H270V40C270 28.444 260.632 19.076 249.076 19.076H19.076C8.54062 19.076 4.76831e-06 10.5354 4.76831e-06 0V0L0 40Z"
          fill="#FF8A00"
        />
      </svg>
    </section>
    <section class="orange">
      <Row
        ><span class="title white-text">{{ requestTitle }}</span>
        <span class="requestType orange-text">{{ kind }}</span></Row
      >
      <Row>
        <p class="description white-text">{{ description }}</p>
      </Row>
    </section>
  </div>
</template>

<script>
import Row from '@/components/Row'
export default {
  name: 'RequestCard',
  props: {
    requestTitle: String,
    kind: String,
    description: String,
    profile: String,
    name: String,
    origin: String
  },
  components: { Row }
}
</script>

<style scoped>
.name {
  margin: 12px 12px 4px 12px;
  font-size: 1.2rem;
}

.origin {
  margin: 4px 12px 4px 12px;
}

.nameWrapper span {
  width: 100%;
}

.nameWrapper {
  display: inline;
}

.avatar {
  margin-left: 20px;
  position: relative;
  bottom: 16px;
  z-index: 1;
  border-radius: 50%;
  height: 84px;
  width: 84px;
  background-color: #2c3e50;
}

.grey-text {
  color: #c6c6c6;
}

.profile {
  padding: 4px;
  margin: 4px 16px;
}

.description {
  margin: 0px 16px 16px;
  padding: 4px;
}

.white-text {
  color: white;
}

.orange-text {
  color: #ff8a00;
}

.title {
  margin: 0px 16px 4px;
  padding-left: 4px;
  font-size: 1.2rem;
  width: 70%;
}
.requestType {
  margin: 4px 16px 4px;
  padding: 4px;
  border-radius: 20px;
  text-align: center;
  background-color: white;
  width: 30%;
}
.card {
  border-radius: 20px;
  height: 50vh;
  width: 80vw;
  background-color: red;
}

.card section {
  width: 100%;
}

.transparent {
  height: 3vh;
  background-color: transparent;
}

.white {
  height: 22vh;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.wave {
  height: 5vh;
}

.orange {
  height: 20vh;
  background-color: #ff8a00;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
