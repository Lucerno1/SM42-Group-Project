import api from '@/api'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    chats: []
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    SET_CHATS(state, chats) {
      state.chats = chats
    },
    APPEND_CHATS(state, chat) {
      state.chats.push(chat)
    }
  },
  actions: {
    loadChatOverview({ commit }) {
      api
        .get('/chat/own')
        .then((response) => {
          window.console.log(response)
          commit('SET_CHATS', response.data.chats)
        })
        .catch((error) => {
          window.console.log(error)
        })
    },
    acceptRequest({ commit }, id) {
      api
        .post('/chat', qs.stringify({ participants: id }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((res) => {
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
