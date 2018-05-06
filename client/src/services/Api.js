import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://easy-mock.com/mock/5aed174fefe0537f00d5c957/`
  })
}
