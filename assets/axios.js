import axios from 'axios'
import { getCookie } from '~/assets/cookie'

axios.interceptors.request.use(config => {
  let data = getCookie('todo-account')
  if (data) data = JSON.parse(decodeURIComponent(data))
  if (data) {
    const token = data.token
    if (token) config.headers.Authorization = 'Bearer ' + token
  }

  config.baseURL = process.env.baseUrl
  return config
})

axios.interceptors.response.use(res => res, err => {
  const config = err.config
  const res = err.response
  const request = 'Request Failed: ' + config.method.toUpperCase() + ' ' + config.baseURL + config.url
  let message = request
  if (res) message += ': ' + '[' + res.status + '] ' + res.data
  console.error(message)

  if (window.app) {
    if (res) {
      if (res.status === 401) {
        window.app.$router.push('/login')
      } else {
        window.app.$notify({
          type: 'error',
          title: 'Request Failed',
          message: res.status + ' response returned for request ' + request
        })
      }
    } else {
      window.app.$notify({
        type: 'error',
        title: 'Connection Failed',
        message: 'Unable to connect to server.'
      })
    }
    
  }
  return res
})

export default axios