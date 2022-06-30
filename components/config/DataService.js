import axios from 'axios'

let API_ENDPOINT = process.env.baseUrl;
export default axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Content-type": "application/json",
        'content-type': 'multipart/form-data'
    }
});
