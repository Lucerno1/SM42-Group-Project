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
    },
    REMOVE_MY_REQUEST(state, id) {
      state.myRequests.forEach((x, index) => {
        if (x._id === id) {
          state.myRequests.splice(index, 1)
        }
      })
    },
    REPLACE_MY_REQUEST(state, original, newCard) {
      state.myRequests[state.myRequests.indexOf(original)] = newCard
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
        .catch(() => {
          api.get('/buddy/card').then((response) => {
            commit('APPEND_REQUESTS', response.data.cards)
          })
        })
    },
    loadMyRequests({ commit }) {
      api.get('/buddy/card/own').then((res) => {
        commit('SET_MY_REQUESTS', res.data.cards)
      })
    },
    createRequest({ commit }, card) {
      commit('ADD_MY_REQUEST', card)
      api.post('buddy/card', qs.stringify(card)).then((res) => {
        commit('REPLACE_MY_REQUEST', card, res.data.card)
      })
    },
    deleteRequest({ commit }, id) {
      window.console.log('hi')
      api
        .delete('/buddy/card', {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: qs.stringify({ _id: id })
        })
        .then((res) => {
          window.console.log(res)
        })
        .catch((e) => {
          window.console.log(e)
        })
      commit('REMOVE_MY_REQUEST', id)
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
      if (state.filter.type === 'both') {
        return state.requests
      }
      window.console.log(state.filter.type)
      return state.requests.filter((x) => x.type === state.filter.type)
    },
    myRequests: (state) => {
      return state.myRequests.filter((x) => x.type === 'Request')
    },
    myQuestions: (state) => {
      return state.myRequests.filter((x) => x.type === 'Question')
    }
  }
}
