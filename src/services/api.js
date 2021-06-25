import axios  from 'axios'

const api = axios.create({
    //baseURL:'http://localhost:3002',
    baseURL: process.env.APP_URL,
    crossDomain: true,
    
})

export default api;