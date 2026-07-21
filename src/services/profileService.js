import axios from "axios";

const API = "https://skilllin-server.onrender.com/api/profile";

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = async (profile) => {
  const token = localStorage.getItem("token");

  return axios.put(API, profile, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};