import API from './api'

const login = (username, password) => API.post('users/login', { username, password })

export default {
    login
}