import axios from 'axios'

const api = axios.create({
  baseURL: 'https://local-buddy-sm.herokuapp.com/api'
})

let token = ''

let fetchingToken = false

let callbacks = []

api.interceptors.response.use(
  (resp) => resp,
  (err) => {
    if (err.status !== 401) {
      return Promise.reject(err)
    }
    if (!fetchingToken) {
      fetchingToken = true
      api
        .get(token)
        .then((res) => {
          token = res.data
        })
        .then(() => {
          callbacks.forEach((callback) => {execute})
        })
    }
    callbacks.push(err)
  }
)

export default api
