import axios from 'axios';

export const getExplanation = async (question, language) => {
  const res = await axios.post('http://localhost:5000/api/ai/explain', { question, language });
  return res.data.explanation;
};

export const generateQuiz = async (topic, grade, language) => {
  const res = await axios.post('http://localhost:5000/api/ai/quiz', { topic, grade, language });
  return res.data.quiz;
};
