import axios from "axios";

export const clienteAxios = axios.create({
    baseURL: process.env.backendURL,
    // baseURL: 'http://localhost:4000',
})
