import axios from "axios";
const token = localStorage.getItem("token");

const axiosClient = axios.create({
  headers: {
    Authorization: token, // Include the token in the Authorization header
  },
});

export default axiosClient;
