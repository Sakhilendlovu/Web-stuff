import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/ai';

export const getExplanation = async (question, language) => {
  const res = await axios.post(`${API_URL}/explain`, { question, language });
  return res.data.explanation;
};

export const generateQuiz = async (topic, grade, language) => {
  const res = await axios.post(`${API_URL}/quiz`, { topic, grade, language });
  return res.data.quiz;
};
