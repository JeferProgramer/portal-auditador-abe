import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosApiInstance.interceptors.request.use(
  (config) => {
    if (!config.NO_TOKEN) {
      let session_id = localStorage.getItem("ABE_USER_SESSION_ID");

      if (!session_id) {
        session_id = process.env.NEXT_PUBLIC_SESSION_ID;
      }

      if (session_id) {
        config.headers.Authorization = `Bearer ${session_id}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosApiInstance;