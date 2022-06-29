import axios from 'axios'

let API_ENDPOINT = process.env.baseUrl;
// console.log(API_ENDPOINT,"vishal")
export default axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Content-type": "application/json"
    }
  });
