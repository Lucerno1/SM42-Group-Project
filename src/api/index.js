import axios from 'axios'
import store from '@/store/index'
import qs from 'qs'

const api = axios.create({
  baseURL: 'https://local-buddy-sm.herokuapp.com/api'
})

let token = localStorage.getItem('token') | ''

let fetchingToken = false

let callbacks = []

api.interceptors.response.use(
  (resp) => resp,
  (err) => {
    const request = err.config
    if (err.response.status !== 401) {
      return Promise.reject(err)
    }

    callbacks.push(
      new Promise(function (resolve, reject) {
        callbacks.push({ resolve, reject })
      })
        .then((token) => {
          request.headers['Authorization'] = token
          return api.request(request)
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    )
    if (!fetchingToken) {
      fetchingToken = true
      api
        .post('/user/auth', qs.stringify(store.getters['user/credentials']), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then((res) => {
          console.log(res)
          token = res.data.token
          localStorage.setItem('token', token)
        })
        .then(() => {
          callbacks.forEach((callback) => {
            callback()
          })
        })
    }
  }
)

export default api
