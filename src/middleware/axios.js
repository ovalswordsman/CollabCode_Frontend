import axios from "axios";
const token = localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Authorization: token, // Include the token in the Authorization header
  },
});

export default axiosClient;
