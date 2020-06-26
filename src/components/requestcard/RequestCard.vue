<template>
  <div class="card">
    <div class="inner-top">
      <div class="top-container">
        <span class="avatar"></span>
        <div class="nameWrapper">
          <span class="orange-big-text">{{ name }}</span
          ><br />
          <span class="grey-text origin">{{ origin }}</span>
        </div>
      </div>
      <p class="black-text lh-13">{{ profile }}</p>
    </div>
    <div class="inner-bottom">
      <div class="typeWrapper">
        <span class="white-big-text description">{{ requestTitle }}</span>
        <span class="orange-text kind">{{ kind }}</span>
      </div>
      <p class="white-text lh-13">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestCard',
  props: {
    requestTitle: String,
    kind: String,
    description: String,
    profile: String,
    name: String,
    origin: String
  }
}
</script>

<style scoped>
.lh-13 {
  line-height: 1.3;
}

.card {
  position: relative;
  height: fit-content;
  width: 75vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    to right,
    #ff8a00 0%,
    #ff8a00 50%,
    #fff 50%,
    #fff 100%
  );
}

.inner-top {
  background: #fff;
  border-radius: 20px 20px 0 20px;
  padding: 20px;
}

.inner-bottom {
  background: #ff8a00;
  border-radius: 0 20px 20px 20px;
  padding: 20px;
}

.avatar {
  display: block;
  width: 84px;
  height: 84px;
  background: #424242;
  border-radius: 50%;
  margin: -42px 15px 15px 0;
}

.top-container {
  display: flex;
  flex-flow: row wrap;
}

.nameWrapper {
  margin: -10px 0 10px 0;
}

.nameWrapper .origin {
  font-weight: 400;
}

.typeWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.typeWrapper span {
  display: block;
  width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
}

.typeWrapper .description {
  font-size: 1.1rem;
  margin: 0 10px 10px 0;
  white-space: nowrap;
}

.typeWrapper .kind {
  background: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  margin-bottom: 10px;
}
</style>
