import api from '@/api'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    id: '',
    chatname: '',
    participants: [],
    chatlog: []
  },
  mutations: {
    SET_CHAT(state, chat) {
      state.id = chat._id
      state.chatname = chat.chatname
      state.participants = chat.participants
      state.chatlog = chat.chatlog
    }
  },
  actions: {
    load({ commit }, id) {
      api
        .post('/chat/get', qs.stringify({ _id: id }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((res) => {
          console.log(res)
          commit('SET_CHAT', res.data.chat)
        })
    }
  },
  getters: {
    name: (state) => {
      if (state.participants.length < 1) {
        return ''
      }
      return (
        state.participants[0].firstname + ' ' + state.participants[0].lastname
      )
    },
    chatMessages: (state) => {
      return state.chatlog
    }
  }
}
