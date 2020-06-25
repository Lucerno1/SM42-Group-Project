import Vue from 'vue'
import Vuex from 'vuex'
import requests from '@/store/requests'
import user from '@/store/user'
import chats from '@/store/chats'

Vue.use(Vuex)

const modules = { requests, user, chats }

const store = new Vuex.Store({
  modules
})

export default store
