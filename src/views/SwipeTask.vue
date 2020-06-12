<template>
  <div>
    <BigCircle>
      <span class="white-big-text">Requests</span>
      <sliders-icon
        @click="OpenFilter()"
        size="1.5x"
        class="white-text options"
      ></sliders-icon>
    </BigCircle>
    <Flickity ref="carousel" :options="flickityOptions" class="gallery" v-on:>
      <RequestCard
        class="gallery-cell"
        v-for="(request, index) in requests"
        :key="'request' + index"
        :request-title="request.title"
        :kind="request.type"
        :origin="request.nationality"
        :name="request.firstname + ' ' + request.lastname"
        :profile="request.bio"
        :description="request.text"
      ></RequestCard
    ></Flickity>
    <Row class="row"
      ><RoundButton
        color="transparent"
        length="40px"
        class="button-left"
        @click.native="$refs.carousel.previous()"
      >
        <div class="flex-box">
          <arrow-left-icon class="orange-text icon"></arrow-left-icon>
        </div> </RoundButton
      ><RoundButton color="#ff8a00" length="50px" class="button-middle">
        <div class="flex-box">
          <check-icon class="white-text icon"></check-icon>
        </div> </RoundButton
      ><RoundButton
        color="transparent"
        length="40px"
        class="button-right"
        @click.native="$refs.carousel.next()"
      >
        <div class="flex-box">
          <arrow-right-icon class="orange-text icon"></arrow-right-icon>
        </div> </RoundButton
    ></Row>
    <transition name="slide" mode="in-out">
      <SwipeFilter v-if="showFilter"></SwipeFilter>
    </transition>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import RequestCard from '@/components/requestcard/RequestCard'
import BigCircle from '@/components/BigCircle'
import Row from '@/components/Row'
import RoundButton from '@/components/RoundButton'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  SlidersIcon
} from 'vue-feather-icons'
import { mapGetters, mapActions } from 'vuex'
import SwipeFilter from '@/components/swipefilter/SwipeFilter.vue'

export default {
  name: 'SwipeTask',
  computed: {
    ...mapGetters('requests', ['requests'])
  },
  data() {
    return {
      flickity: [],
      showFilter: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        selectedAttraction: 0.1,
        friction: 0.45
      }
    }
  },
  watch: {
    requests: function () {
      setTimeout(() => {
        this.$refs.carousel.rerender()
      }, 1)
    }
  },
  methods: {
    ...mapActions('requests', ['loadRequestSet']),
    OpenFilter() {
      this.showFilter = !this.showFilter
    }
  },
  created() {
    this.loadRequestSet()
  },
  components: {
    RoundButton,
    Row,
    BigCircle,
    RequestCard,
    Flickity,
    SwipeFilter,
    ArrowRightIcon,
    ArrowLeftIcon,
    CheckIcon,
    SlidersIcon
  }
}
</script>

<style>
.flickity-viewport {
  height: calc(50vh + 30px) !important;
}
</style>

<style scoped>
.row {
  margin-top: 24px;
}

.button-left {
  margin-top: 5px;
  margin-left: 18vw;
}

.button-middle {
  margin: auto;
}

.button-right {
  margin-top: 5px;
  margin-right: 18vw;
}

.flex-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  height: 20px;
  width: 20px;
}

.gallery-cell {
  margin: 0 8px 0 8px;
  bottom: 30px;
  transition: bottom 0.3s linear, filter 0.2s linear;
  filter: blur(1px);
}

.is-selected {
  filter: none;
  bottom: 0;
}

.options {
  position: absolute;
  right: 0;
  margin-right: 2em;
  cursor: pointer;
}

/* Transition animation keyframes */
.slide-enter-active,
.slide-leave-active {
  transform: translateY(0);
  transition: 0.5s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(25em);
}
</style>
