import axios from 'axios';
import envs from '../config/env';
let headers = {}

const instance = axios.create({
    baseURL: envs.DEV_BACKEND_URL,
    headers
})