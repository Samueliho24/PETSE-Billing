import { apiHttps } from '../api/apiHttps.js';

const http = apiHttps();
let token;
const getToken = () => localStorage.getItem('userToken');

export async function login(username, password) {
    try {
        const response = await http.post('auth/login', null, { username, password });
        localStorage.setItem('userToken', response.data.access_token);
        return response.data;
    } catch (err) { throw err; }}

export async function getDolarPrice(){
	let res = await axios.get("https://ve.dolarapi.com/v1/dolares/oficial")
	return res.data.promedio
}
