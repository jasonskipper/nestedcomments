import axios from "axios"

const api = axios.create({ // sets default parameters 
    baseURL: process.env.REACT_APP_SERVER_URL, // all requests will go to localhost:3001/[something]  
    withCredentials: true // we use cookies to store user info; if not set, cookies don't go with request 
   // when we implement user info, make it so it sends everything correctly; gives cookie to server  
})

export function makeRequest(url, options) {
    return api(url, options)
        .then(res => res.data)
        .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"))
}
