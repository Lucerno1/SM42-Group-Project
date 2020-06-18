export default {
  namespaced: true,
  state: {
    username: 'Olha040',
    firstname: 'Olha',
    lastname: 'Bondarenko',
    profilePicture: '',
    bio: ''
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
    }
  }
}
