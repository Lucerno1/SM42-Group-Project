import api from '@/api'

export default {
  namespaced: true,
  state: {
    chats: []
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    APPEND_REQUESTS(state, chats) {
      state.chats = chats
    }
  },
  actions: {
    loadChatOverview({ commit }) {
      let url = '/chat/own'
      api
        .get(url)
        .then((response) => {
          commit('APPEND_CHATS', response.data.chats)
        })
        .catch((error) => {
          window.console.log(error)
        })
    }
  },
  getters: {
    chats: (state) => {
      return state.chats
    }
  }
}
