import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://ecom-server-0oqa.onrender.com/api", // Directly using your API URL
    withCredentials: true, // send cookies with requests
});

export default axiosInstance;
