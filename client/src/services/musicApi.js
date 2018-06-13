import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: `http://localhost:3000/`
    baseURL: `http://127.0.0.1:3000/`
  })
}
