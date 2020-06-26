<template>
  <div>
    <Flickity ref="flickity" :options="flickityOptions" class="slideshow">
      <div class="carousel-cell"><Intro src="img/intro/1.png" /></div>
      <div class="carousel-cell"><Intro src="img/intro/2.png" /></div>
      <div class="carousel-cell"><Intro src="img/intro/3.png" /></div>
      <div class="carousel-cell"><Intro src="img/intro/4.png" /></div>
      <div class="carousel-cell"><Intro src="img/intro/5.png" /></div>
      <div class="carousel-cell"><Intro src="img/intro/6.png" /></div>
    </Flickity>

    <div @click="skipTut" class="skip-tut"><h3>Skip tutorial</h3></div>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import Intro from '@/components/Intro'

export default {
  name: 'Introduction',
  components: {
    Flickity,
    Intro
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        wrapAround: true
      }
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    },

    skipTut() {
      localStorage.setItem('firstTime', false)
      this.$router.back()
    }
  }
}
</script>

<style>
.flickity-page-dots {
  bottom: 25px;
}
</style>

<style scoped>
.slideshow {
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  background-color: white;
}
.carousel-cell {
  height: 100%;
  width: 100%;
}
.skip-tut {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  color: rgb(100, 100, 100);
}

@media only screen and (min-width: 360px) {
}
</style>
