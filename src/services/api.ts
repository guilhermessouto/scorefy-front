import axios from "axios";

const baseURL = 'http://localhost:5000'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/pdf'
  }
})

export default axiosInstance