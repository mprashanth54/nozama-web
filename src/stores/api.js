import axios from 'axios'

var instance = axios.create()
instance.defaults.baseURL = 'http://localhost:8000/api/v1'
instance.defaults.timeout = 20000;

export { instance as default };