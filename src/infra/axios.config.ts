import axios, { AxiosInstance } from 'axios';
import { getToken } from './storage.local';

export const URL_API: string = 'http://localhost:5000/api/v1/';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const instance: AxiosInstance = axios.create({
  baseURL: URL_API,
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

export async function configToken() {
  const token = await getToken();
  instance.defaults.headers.post.Authorization = `Bearer ${token}`;
}

configToken();

export const apiError = (e) => {
  if (e.response) {
    const { status } = e.response;
    if (status === 401) {
      window.location.href = '/login';
    }
  }
};

export default instance;
