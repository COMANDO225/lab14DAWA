import axios from "axios";

const api = axios.create({
    baseURL: "https://http-nodejs-production-78a7.up.railway.app/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;