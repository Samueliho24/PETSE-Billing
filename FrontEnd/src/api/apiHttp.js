import axios from 'axios';

// Vite usa import.meta.env para las variables de entorno
const ip = import.meta.env.VITE_BACK_ADDRESS || 'http://localhost';
const url = `${ip}:8000`; // Puerto de FastAPI

export class ApiHttp {
    getHeaders(token) {
        return token ? { headers: { 'Authorization': `Bearer ${token}` } } : {};
    }

    async get(apiAddress, token, value = null) {
        try {
            const endpoint = value ? `${url}/${apiAddress}/${value}` : `${url}/${apiAddress}/`;
            return await axios.get(endpoint, this.getHeaders(token));
        } catch (err) { throw err.response?.data || err; }
    }

    async post(apiAddress, token, data) {
        try {
            return await axios.post(`${url}/${apiAddress}`, data, this.getHeaders(token));
        } catch (err) { throw err.response?.data || err; }
    }

    async put(apiAddress, token, data) {
        try {
            return await axios.put(`${url}/${apiAddress}`, data, this.getHeaders(token));
        } catch (err) { throw err.response?.data || err; }
    }

    async delete(apiAddress, token, value) {
        try {
            return await axios.delete(`${url}/${apiAddress}/${value}`, this.getHeaders(token));
        } catch (err) { throw err.response?.data || err; }
    }
}

export const http = new ApiHttp();
