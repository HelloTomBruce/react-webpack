import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const login = (username, password) => {
    let url = 'http://yapi.demo.qunar.com/mock/33880/music/login'
    return axios.post(url, JSON.stringify({username, password}))
}

export const setToken = (token) => {
    window.document.localStorage('token', token)
}