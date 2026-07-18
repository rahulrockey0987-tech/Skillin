import axios from "axios";

const API = axios.create({
  baseURL: "https://skillin-server.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;