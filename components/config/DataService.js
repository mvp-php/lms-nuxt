import axios from 'axios'

let API_ENDPOINT = process.env.baseUrl;
<<<<<<< HEAD

=======
>>>>>>> e9aac409af105fa48d17e1dca462eb7bdeecc7b4
export default axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Content-type": "application/json",
        'content-type': 'multipart/form-data'
    }
});
