import axios from 'axios';

export default function API(endpoint, method, body, token) {
    return axios({
        method: method,
        url: `http://cb90-125-234-117-20.ngrok.io/api/landingpage/${endpoint}`,
        data: body,
        headers: { "Authorization": `Bearer ${token}` }
    })
}