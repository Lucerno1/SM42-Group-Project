import axios from 'axios'
import store from '@/store/index'
import qs from 'qs'

const api = axios.create({
  baseURL: 'https://local-buddy-sm.herokuapp.com/api'
})

let token = localStorage.getItem('token') | ''

api.defaults.headers.common['Auth-Token'] = token

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

api.interceptors.response.use(
  (resp) => resp,
  (err) => {
    const originalRequest = err.config
    if (
      err.response.status !== 401 ||
      originalRequest._retry ||
      originalRequest.url === '/user/auth'
    ) {
      return Promise.reject(err)
    }

    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject })
      })
        .then((token) => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token
          return api.request(originalRequest)
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    }

    originalRequest._retry = true
    isRefreshing = true

    return new Promise((resolve, reject) => {
      logIn(store.getters['user/credentials'])
        .then((res) => {
          originalRequest.headers['Authorization'] = 'Bearer ' + res.data.token
          processQueue(null, res.data.token)
          resolve(api(originalRequest))
        })
        .catch((err) => {
          processQueue(err, null)
          reject(err)
        })
        .then(() => {
          isRefreshing = false
        })
    })
  }
)

export default api

function logIn(credentials) {
  return api
    .post('/user/auth', qs.stringify(credentials), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then((res) => {
      token = res.data.token
      localStorage.setItem('token', token)
      api.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
      return res
    })
}

export { logIn }
