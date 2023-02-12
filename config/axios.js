import axios from "axios";

export const clienteAxios = axios.create({
    // baseURL: process.env.backendURL,
    baseURL: 'https://nuk-send-node.herokuapp.com'
    // baseURL: 'http://localhost:4000',
})
