import api from '@/api'

export default {
  namespaced: true,
  state: {
    username: 'TestUser2',
    firstname: 'fewfwfw',
    lastname: 'wfwfwf',
    profilePicture: '',
    bio: '',
    password: 'TestPassword',
    isLoggedIn: false
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username
    },
    SET_FIRSTNAME(state, firstname) {
      state.firstname = firstname
    },
    SET_LASTNAME(state, lastname) {
      state.lastname = lastname
    },
    SET_PROFILE_PICTURE(state, profilePicture) {
      state.profilePicture = profilePicture
    },
    SET_BIO(state, bio) {
      state.bio = bio
    },
    SET_LOGGED_IN(state, bool) {
      state.isLoggedIn = bool
    }
  },
  actions: {
    updateUsername({ commit }, username) {
      commit('SET_USERNAME', username)
    },
    updateFirstname({ commit }, firstname) {
      commit('SET_FIRSTNAME', firstname)
    },
    updateLastname({ commit }, lastname) {
      commit('SET_LASTNAME', lastname)
    },
    updateProfilePicture({ commit }, profilePicture) {
      commit('SET_PROFILE_PICTURE', profilePicture)
    },
    updateBio({ commit }, bio) {
      commit('SET_BIO', bio)
    },
    login({ commit }, credentials) {
      api.get('/user/me').then((res) => {
        const user = res.data.user
        user.password = credentials.password

        commit('')
      })
    }
  },
  getters: {
    username: (state) => {
      return state.username
    },
    firstname: (state) => {
      return state.firstname
    },
    lastname: (state) => {
      return state.lastname
    },
    profilePicture: (state) => {
      return state.profilePicture
    },
    bio: (state) => {
      return state.bio
    },
    credentials: (state) => {
      return { username: state.username, password: state.password }
    },
    isLoggedIn: (state) => {
      return state.isLoggedIn
    }
  }
}
