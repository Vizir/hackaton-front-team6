import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://u7mvwa16vc.execute-api.sa-east-1.amazonaws.com/default',
});
