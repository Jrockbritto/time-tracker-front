import axios from "axios";

const baseURL = process.env.REACT_APP_DEV_API_URL;

const api = axios.create({
  baseURL,
  withCredentials: true,
});

/* 
  The below is required if you want your API to return 
  server message errors. Otherwise, you'll just get 
  generic status errors.

  If you use the interceptor below, then make sure you 
  return an "err" (or whatever you decide to name it) message 
  from your express route: 
  
  res.status(404).json({ err: "You are not authorized to do that." })

*/
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
    }
    Promise.reject(error.response.data.err);
  }
);

export default api;
