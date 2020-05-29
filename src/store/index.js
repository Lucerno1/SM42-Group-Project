import Vue from 'vue'
import Vuex from 'vuex'
import requests from '@/store/requests'

Vue.use(Vuex)

const modules = { requests }

const store = new Vuex.Store({
  modules
})

export default store
