import axios from 'axios';

const request = axios.create({
    baseURL: 'https://localhost:8098/api/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};


export default request;
