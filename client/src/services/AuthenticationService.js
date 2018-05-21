import Api from '@/services/Api'

export default {
  userLogin(credentials) {
    return Api().post('/userLogin', credentials)
  },
  userRegister(credentials) {
    return Api().post('/userRegister', credentials)
  },
  adminLogin(credentials) {
    return Api().post('/adminLogin', credentials)
  },
  adminRegister(credentials) {
    return Api().post('/adminRegister', credentials)
  }
}
