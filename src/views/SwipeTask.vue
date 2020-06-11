<template>
  <Flickity :options="flickityOptions">
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
</template>

<script>
import Flickity from 'vue-flickity'
import RequestCard from '@/components/requestcard/RequestCard'

export default {
  name: 'SwipeTask',
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        selectedAttraction: 0.1,
        friction: 0.45
      },
      requests: [
        {
          title: 'Tax system',
          kind: 'Question',
          origin: 'Morocco',
          name: 'Achmed Akhabi',
          profile:
            'Hello, I am Achmed and I just moved to The Netherlands a few months ago. I do speak Arabic, English and a little bit Dutch.',
          description:
            'The tax system in the netherlands is new for me. I did get alot of letters from the government about this but I don’t know what to do. Could someone explain me in a private chat what to do?'
        },
        {
          title: 'Tax system',
          kind: 'Question',
          origin: 'Morocco',
          name: 'Achmed Akhabi',
          profile:
            'Hello, I am Achmed and I just moved to The Netherlands a few months ago. I do speak Arabic, English and a little bit Dutch.',
          description:
            'The tax system in the netherlands is new for me. I did get alot of letters from the government about this but I don’t know what to do. Could someone explain me in a private chat what to do?'
        },
        {
          title: 'Tax system',
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
  components: { RequestCard, Flickity }
}
</script>

<style scoped>
.gallery-cell {
  margin: 0 8px 0 8px;
}
</style>
