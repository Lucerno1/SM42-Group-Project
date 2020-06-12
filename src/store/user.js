export default {
  namespaced: true,
  state: {
    firstname: '',
    lastname: '',
    profilePicture: '',
    bio: ''
  },
  mutations: {
    SET_FIRSTNAME(state, firstname) {
      state.firstname = firstname
    },
    SET_LASTNAME(state, lastname) {
      state.firstname = lastname
    },
    SET_PROFILE_PICTURE(state, profilePicture) {
      state.firstname = profilePicture
    },
    SET_BIO(state, bio) {
      state.firstname = bio
    }
  },
  actions: {
    updateFirstname({ commit }, firstname) {
      commit('SET_BIO', firstname)
    },
    updateLastname({ commit }, lastname) {
      commit('SET_BIO', lastname)
    },
    updateProfilePicture({ commit }, profilePicture) {
      commit('SET_PROFILE_PICTURE', profilePicture)
    },
    updateBio({ commit }, bio) {
      commit('SET_BIO', bio)
    }
  },
  getters: {
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
