// services/api.js
import axios from 'axios';
import cookieparser from 'cookieparser';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Adiciona interceptador para incluir cookies nas requisições
api.interceptors.request.use((config) => {
  // Verifica se estamos no navegador antes de usar o document
  if (typeof window !== 'undefined') {
    const cookies = document.cookie;
    config.headers.Cookie = cookieparser.serialize(cookies);
  }

  return config;
});

export default api;
