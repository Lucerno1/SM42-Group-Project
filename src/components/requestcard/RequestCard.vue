<template>
  <div class="card">
    <section class="transparent"></section>
    <section class="white-section white">
      <Row
        ><span class="avatar"></span>
        <div class="nameWrapper">
          <Row
            ><span class="orange-big-text name">{{ name }}</span></Row
          >
          <Row
            ><span class="grey-text origin">{{ origin }}</span></Row
          >
        </div></Row
      >
      <p class="profile black-text">{{ profile }}</p>
    </section>
    <section class="wave">
      <Row class="upper white">
        <div class="left-corner orange"></div>
      </Row>
      <Row class="lower orange">
        <div class="corner-wrapper"><div class="right-corner white"></div></div>
      </Row>
    </section>
    <section class="orange-section orange">
      <Row
        ><div class="center-text title-container">
          <span class="white-big-text">{{ requestTitle }}</span>
        </div>
        <div class="center-text requestType white">
          <span class="orange-text mb-1">{{ kind }}</span>
        </div>
      </Row>
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
.mb-1 {
  margin-bottom: 2px;
}
.center-text {
  display: flex;
  align-items: center;
}

.name {
  margin: 12px 12px 4px 12px;
  font-size: 1.2rem;
}

.origin {
  margin: 0px 12px 4px 12px;
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

.profile {
  padding: 4px;
  margin: 4px 16px 0;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4;
}

.description {
  margin: 0px 16px 16px;
  padding: 15px 4px 4px;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4;
}

.title-container {
  margin: 0 16px 4px;
  padding-left: 4px;
  width: 75%;
}

.requestType {
  justify-content: center;
  margin: 4px 16px 4px 4px;
  padding: 4px 15px;
  border-radius: 20px;
  text-align: center;
  width: 25%;
}
.card {
  border-radius: 20px;
  height: 55vh;
  width: 75vw;
}

.card section {
  width: 100%;
}

.transparent {
  height: 3vh;
  background-color: transparent;
}

.white-section {
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.wave {
  height: 5vh;
}

.left-corner {
  height: 2.5vh;
  width: 2.5vh;
  mask: radial-gradient(circle at top right, transparent 2.5vh, #fff 0);
}

.corner-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.right-corner {
  height: 2.5vh;
  width: 2.5vh;
  mask: radial-gradient(circle at bottom left, transparent 2.5vh, #fff 0);
}

.wave .upper {
  height: 2.5vh;
}

.wave .lower {
  height: 2.5vh;
}

.orange-section {
  height: 22vh;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
