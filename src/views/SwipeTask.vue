<template>
  <div>
    <BigCircle :height="230">
      <span class="white-big-text">Requests</span>
      <sliders-icon
        @click="OpenFilter()"
        size="1.5x"
        class="white-text options"
      ></sliders-icon>
    </BigCircle>
    <div class="card-slider">
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
        ><RoundButton
          color="#ff8a00"
          length="60px"
          class="button-middle"
          @click.native="accept"
        >
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
    </div>
    <transition name="slide" mode="in-out">
      <SwipeFilter v-show="showFilter"></SwipeFilter>
    </transition>
    <button role="button" @click="installPWA" id="installButton">
      <div class="prompt-box">
        <download-icon size="1.3x"></download-icon>
        <p>INSTALL</p>
      </div>
    </button>
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
  SlidersIcon,
  DownloadIcon
} from 'vue-feather-icons'
import { mapGetters, mapActions } from 'vuex'
import SwipeFilter from '@/components/swipefilter/SwipeFilter.vue'
import pwaInstallHandler from 'pwa-install-handler'

export default {
  name: 'SwipeTask',
  computed: {
    ...mapGetters('requests', ['requests']),
    ...mapGetters('user', ['isLoggedIn'])
  },
  data() {
    return {
      showFilter: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        selectedAttraction: 0.1,
        friction: 0.4,
        dragThreshold: 5
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
    ...mapActions('chats', ['acceptRequest']),
    OpenFilter() {
      this.showFilter = !this.showFilter
    },
    accept: function () {
      if (!this.isLoggedIn) {
        this.$router.push({ name: 'Login' })
        return
      }
      this.acceptRequest(
        this.requests[this.$refs.carousel.selectedIndex()]._sender
      )
      this.$router.push({ name: 'ChatOverview' })
    },
    installPWA() {
      pwaInstallHandler.install().then((isInstalled) => {
        window.console.log(
          isInstalled ? 'Install accepted' : 'Install declined'
        )
      })
    }
  },
  created() {
    this.loadRequestSet()
  },
  mounted() {
    pwaInstallHandler.addListener((canInstall) => {
      window.console.log(canInstall)
      document.getElementById('installButton').style.display = canInstall
        ? 'inline-block'
        : 'none'
    })
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
    SlidersIcon,
    DownloadIcon
  }
}
</script>

<style>
.gallery .flickity-viewport {
  height: calc(55vh + 30px) !important;
}
</style>

<style scoped>
.row {
  margin-top: 24px;
}

.button-left {
  margin-top: 10px;
  margin-left: 18vw;
}

.button-middle {
  margin: auto;
}

.button-right {
  margin-top: 10px;
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

.card-slider {
  transform: translateY(90px);
}

.gallery-cell {
  margin: 35px 8px 0 8px;
  top: 0;
  transition: top 0.2s linear, filter 0.2s linear;
  filter: blur(1px);
  animation: fadein 0.6s;
  -moz-animation: fadein 0.6s; /* Firefox */
  -webkit-animation: fadein 0.6s; /* Safari and Chrome */
  -o-animation: fadein 0.6s; /* Opera */
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.is-selected {
  filter: none;
  top: 30px;
}

.options {
  position: absolute;
  right: 0;
  margin-right: 50px;
  cursor: pointer;
  margin-top: 50px;
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

#installButton {
  display: none;
  position: absolute;
  top: 0;
  outline: none;
  border: none;
  border-radius: 50px;
  margin: 46px 0 0 20px;
  background: #fff;
  color: #ff8a00;
  font-size: 0.95rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.prompt-box {
  height: 30px;
  padding: 1px 7px;
  display: flex;
  align-items: center;
}

.prompt-box p {
  margin-left: 3px;
}

@media only screen and (max-height: 620px) {
  #installButton {
    margin: 46px 0 0 10px;
  }
}
</style>
