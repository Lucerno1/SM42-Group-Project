import api from '@/api'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    loadCount: 0,
    requests: [],
    filter: {
      maximumDistance: -1,
      type: 'both'
    },
    myRequests: []
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    APPEND_REQUESTS(state, requests) {
      state.requests = requests
    },
    INCREMENT_LOAD_COUNT(state) {
      state.loadCount++
    },
    SET_FILTER_TYPE(state, type) {
      state.filter.type = type
      localStorage.setItem('filter', JSON.stringify(state.filter))
    },
    SET_FILTER_DISTANCE(state, maximumDistance) {
      state.filter.maximumDistance = maximumDistance
      localStorage.setItem('filter', JSON.stringify(state.filter))
    },
    SET_FILTER(state, filter) {
      state.filter = filter
    },
    ADD_MY_REQUEST(state, card) {
      state.myRequests.push(card)
    },
    SET_MY_REQUESTS(state, reqs) {
      state.myRequests = reqs
    }
  },
  actions: {
    init({ commit }) {
      let filter = JSON.parse(localStorage.getItem('filter'))

      commit('SET_FILTER', filter)
    },
    loadRequestSet({ commit, rootGetters }) {
      let url = '/buddy/card'
      if (rootGetters['user/isLoggedIn']) {
        url += '/other'
      }
      api
        .get(url)
        .then((response) => {
          commit('APPEND_REQUESTS', response.data.cards)
          // commit('INCREMENT_LOAD_COUNT')
        })
        .catch((error) => {
          window.console.log(error)
        })
    },
    loadMyRequests({ commit }) {
      api.get('/buddy/card/own').then((res) => {
        commit('SET_MY_REQUESTS', res.data.cards)
      })
    },
    createRequest({ commit }, card) {
      api.post('buddy/card', qs.stringify(card))
      commit('ADD_MY_REQUEST', card)
    },
    setFilterType({ commit }, type) {
      commit('SET_FILTER_TYPE', type)
    },
    setFilterMaximumDistance({ commit }, maximumDistance) {
      commit('SET_FILTER_DISTANCE', maximumDistance)
    }
  },
  getters: {
    requests: (state) => {
      return state.requests
    },
    myRequests: (state) => {
      return state.myRequests.filter((x) => x.type === 'Request')
    },
    myQuestions: (state) => {
      return state.myRequests.filter((x) => x.type === 'Question')
    }
  }
}
