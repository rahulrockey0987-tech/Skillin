import axios from "axios";

const API =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getLiveClasses = async () => {
  const res = await axios.get(`${API}/live-classes`, authConfig());
  return res.data;
};

export const getLiveClass = async (id) => {
  const res = await axios.get(`${API}/live-classes/${id}`, authConfig());
  return res.data;
};

export const createLiveClass = async (data) => {
  const res = await axios.post(
    `${API}/live-classes`,
    data,
    authConfig()
  );
  return res.data;
};

export const updateLiveClass = async (id, data) => {
  const res = await axios.put(
    `${API}/live-classes/${id}`,
    data,
    authConfig()
  );
  return res.data;
};

export const deleteLiveClass = async (id) => {
  const res = await axios.delete(
    `${API}/live-classes/${id}`,
    authConfig()
  );
  return res.data;
};

export const joinLiveClass = async (id) => {
  const res = await axios.post(
    `${API}/live-classes/${id}/join`,
    {},
    authConfig()
  );
  return res.data;
};

export const markAttendance = async (id) => {
  const res = await axios.post(
    `${API}/live-classes/${id}/attendance`,
    {},
    authConfig()
  );
  return res.data;
};