import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    // baseURL: `https://easy-mock.com/mock/5aed174fefe0537f00d5c957/`
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
