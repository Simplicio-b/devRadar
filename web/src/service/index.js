import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:9100/"
})

export default api
