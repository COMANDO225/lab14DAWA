import api from "../api";

export const get = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        return error
    }
}

export const post = async (url, body) => {
    try {
        const response = await api.post(url, JSON.stringify(body))
        return response.data
    } catch (error) {
        return error
    }
}