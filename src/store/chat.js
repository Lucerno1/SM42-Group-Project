import api from '@/api'
import qs from 'qs'
import user from '@/mixins/user'

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
    name: (state, rootGetters) => {
      if (state.participants.length < 1) {
        return ''
      }
      const other = user.methods.getOther(
        rootGetters['user/id'],
        state.participants
      )
      return other.firstname + ' ' + other.lastname
    },
    chatMessages: (state) => {
      return state.chatlog
    },
    participants: (state) => {
      return state.participants
    }
  }
}
