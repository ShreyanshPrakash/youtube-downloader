import axios from 'axios';



export const httpsService = axios.create({
    baseURL: "http://localhost:4000",
    headers: {},
})