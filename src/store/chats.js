import api from '@/api'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    chats: []
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    APPEND_CHATS(state, chats) {
      state.chats.push(chats)
    }
  },
  actions: {
    loadChatOverview({ commit }) {
      api
        .get('/chat/own')
        .then((response) => {
          commit('APPEND_CHATS', response.data.chats)
        })
        .catch((error) => {
          window.console.log(error)
        })
    },
    acceptRequest({ commit }, id) {
      console.log({ participants: [{ _id: id }] })
      api
        .post('/chat', qs.stringify({ _id: id }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((res) => {
          console.log(res)
          commit('APPEND_CHATS', res.data.chat)
        })
    }
  },
  getters: {
    chats: (state) => {
      return state.chats
    }
  }
}
