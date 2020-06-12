import axios from 'axios'

const apiURL = 'https://local-buddy-sm.herokuapp.com/api'

export default {
  namespaced: true,
  state: {
    loadCount: 0,
    requests: [],
    filter: {
      maximumDistance: -1,
      type: 'both'
    }
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
    }
  },
  actions: {
    init({ commit }) {
      let filter = JSON.parse(localStorage.getItem('filter'))

      commit('SET_FILTER', filter)
    },
    loadRequestSet({ commit }) {
      let token =
        '34otOAlpqIdLCraw2ONVPn0sKnHOnW65qo4YKLKQO7yRtVnoDDRjDw0lR8uJqvURsE9+kwuannjOl2d4TRL/+g=='
      axios
        .get(apiURL + '/buddy/card/other', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          window.console.log(JSON.stringify(response.data.cards))
          commit('APPEND_REQUESTS', response.data.cards)
          // commit('INCREMENT_LOAD_COUNT')
        })
        .catch((error) => {
          window.console.log(error)
        })
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
    }
  }
}
