import api from '@/api'
import { logIn } from '@/api'
import qs from 'qs'

export default {
  namespaced: true,
  state: {
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    profilePicture: '',
    bio: '',
    password: '',
    isLoggedIn: false,
    nationality: '',
    pc: ''
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
    SET_USER_DATA(state, user) {
      state.id = user._id
      state.firstname = user.firstname
      state.lastname = user.lastname
      state.password = user.password
      state.nationality = user.nationality
      state.pc = user.pc
      state.username = user.username
      state.isLoggedIn = true
    }
  },
  actions: {
    load({ commit }) {
      const user = localStorage.getItem('user')
      if (user !== null) {
        commit('SET_USER_DATA', user)
      }
    },
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
      logIn(credentials).then(() => {
        api.get('/user/me').then((res) => {
          console.log(res)
          const user = res.data.user
          user.password = credentials.password
          commit('SET_USER_DATA', user)
          localStorage.setItem('user', user)
        })
      })
    },
    register({ commit, rootGetters }, user) {
      console.log(user)
      api
        .post('/user', qs.stringify(user), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((res) => {
          if (res.status === 201) {
            const data = res.data.user
            data.password = user.password
            commit('SET_USER_DATA', data)
            localStorage.setItem('user', data)
            logIn(rootGetters["user/credentials"])
          }
        })
    }
  },
  getters: {
    id: (state) => {
      return state.id
    },
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
