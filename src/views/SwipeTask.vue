<template>
  <RequestCard v-for="(request, index) in requests" :key="'request'"
    request-title="Tax system"
    kind="Question"
    origin="Morocco"
    name="Achmed Akhabi"
    profile="Hello, I am Achmed and I just moved to 
The Netherlands a few months ago. I do speak Arabic, English and a little bit Dutch."
    description="The tax system in the netherlands is new for me. I did get alot of letters from the government about this but I don’t know what to do. Could someone explain me in a private chat what to do?"
  ></RequestCard>
</template>

<script>
import RequestCard from '@/components/requestcard/RequestCard'

export default {
  name: 'SwipeTask',
  data() {
    return {
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
  components: { RequestCard }
}
</script>

<style scoped></style>
