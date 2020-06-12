<template>
  <div>
    <BigCircle><span class="white-text">Requests</span></BigCircle>
    <Flickity ref="carousel" :options="flickityOptions" class="gallery">
      <RequestCard
        class="gallery-cell"
        v-for="(request, index) in requests"
        :key="'request' + index"
        :request-title="request.title"
        :kind="request.kind"
        :origin="request.origin"
        :name="request.name"
        :profile="request.profile"
        :description="request.description"
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
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import RequestCard from '@/components/requestcard/RequestCard'
import BigCircle from '@/components/BigCircle'
import Row from '@/components/Row'
import RoundButton from '@/components/RoundButton'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from 'vue-feather-icons'

export default {
  name: 'SwipeTask',
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        selectedAttraction: 0.1,
        friction: 0.45
      },
      requests: [
        {
          title: 'Tax system1',
          kind: 'Question',
          origin: 'Morocco',
          name: 'Achmed Akhabi',
          profile:
            'Hello, I am Achmed and I just moved to The Netherlands a few months ago. I do speak Arabic, English and a little bit Dutch.',
          description:
            'The tax system in the netherlands is new for me. I did get alot of letters from the government about this but I don’t know what to do. Could someone explain me in a private chat what to do?'
        },
        {
          title: 'Tax system2',
          kind: 'Question',
          origin: 'Morocco',
          name: 'Achmed Akhabi',
          profile:
            'Hello, I am Achmed and I just moved to The Netherlands a few months ago. I do speak Arabic, English and a little bit Dutch.',
          description:
            'The tax system in the netherlands is new for me. I did get alot of letters from the government about this but I don’t know what to do. Could someone explain me in a private chat what to do?'
        },
        {
          title: 'Tax system3',
          kind: 'Question',
          origin: 'Morocco',
          name: 'Achmed Akhabi',
          profile:
            'Hello, I am Achmed and I just moved to The Netherlands a few months ago. I do speak Arabic, English and a little bit Dutch.',
          description:
            'The tax system in the netherlands is new for me. I did get alot of letters from the government about this but I don’t know what to do. Could someone explain me in a private chat what to do?'
        }
      ]
    }
  },
  components: {
    RoundButton,
    Row,
    BigCircle,
    RequestCard,
    Flickity,
    ArrowRightIcon,
    ArrowLeftIcon,
    CheckIcon
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

.orange {
  color: #ff8a00;
}

.white {
  color: white;
}

.white-text {
  color: white;
  font-size: 1.2rem;
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
</style>
