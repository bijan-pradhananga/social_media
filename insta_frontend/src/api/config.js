import axios from "axios";

export const API = axios.create({
    baseURL:'https://socialmedia-production-f7a5.up.railway.app',
    withCredentials:true
})
