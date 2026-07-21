import axios from "axios";

const API =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getRecordedClasses = async () => {
  const res = await axios.get(
    `${API}/recorded-classes`,
    authConfig()
  );

  return res.data;
};

export const getRecordedClass = async (id) => {
  const res = await axios.get(
    `${API}/recorded-classes/${id}`,
    authConfig()
  );

  return res.data;
};

export const createRecordedClass = async (data) => {
  const res = await axios.post(
    `${API}/recorded-classes`,
    data,
    authConfig()
  );

  return res.data;
};

export const updateRecordedClass = async (id, data) => {
  const res = await axios.put(
    `${API}/recorded-classes/${id}`,
    data,
    authConfig()
  );

  return res.data;
};

export const deleteRecordedClass = async (id) => {
  const res = await axios.delete(
    `${API}/recorded-classes/${id}`,
    authConfig()
  );

  return res.data;
};

export const updateProgress = async (id, progress) => {
  const res = await axios.put(
    `${API}/recorded-classes/${id}/progress`,
    { progress },
    authConfig()
  );

  return res.data;
};

export const markCompleted = async (id) => {
  const res = await axios.put(
    `${API}/recorded-classes/${id}/complete`,
    {},
    authConfig()
  );

  return res.data;
};