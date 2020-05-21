import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.178.31.101:3334',
});

export default api;
