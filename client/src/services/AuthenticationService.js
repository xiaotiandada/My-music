import Api from '@/services/Api'

export default {
  userLogin(credentials) {
    return Api().post('/userLogin', credentials)
  },
  userRegister(credentials) {
    return Api().post('/userRegister', credentials)
  }
}
