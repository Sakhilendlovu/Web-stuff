exports.explainConcept = async (req, res) => {
  const { question, language } = req.body;
  const prompt = `Explain "${question}" in ${language} for a Grade 8 student.`;
  const explanation = `AI Response: ${prompt}`; // Replace with GPT API call
  res.json({ explanation });
};

exports.generateQuiz = async (req, res) => {
  const { topic, grade, language } = req.body;
  const quiz = [
    {
      question: `What is 5 × 6?`,
      options: ['30', '11', '56', '25'],
      answer: '30'
    },
    {
      question: `Which planet is known as the Red Planet?`,
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      answer: 'Mars'
    }
  ];
  res.json({ quiz });
};
