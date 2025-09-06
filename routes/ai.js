const express = require('express');
const router = express.Router();
const { explainConcept, generateQuiz } = require('../controllers/aiController');

router.post('/explain', explainConcept);
router.post('/quiz', generateQuiz);

module.exports = router;
