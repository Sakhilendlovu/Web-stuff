import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', res.data.token);
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};
