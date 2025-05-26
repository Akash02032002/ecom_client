import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "https://ecom-server-0oqa.onrender.com/api" : "/api" , // replace with your API URL
    withCredentials: true, // send cookies with requests/server-side rendering
});

export default axiosInstance;