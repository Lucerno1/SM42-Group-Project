import Vue from 'vue'
import Vuex from 'vuex'
import requests from '@/store/requests'
import user from '@/store/user'

Vue.use(Vuex)

const modules = { requests, user }

const store = new Vuex.Store({
  modules
})

export default store
