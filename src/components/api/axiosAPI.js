import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://localhost:9090/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosAPI;
