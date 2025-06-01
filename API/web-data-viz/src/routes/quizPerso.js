var express = require('express');
var router = express.Router();
const quizController = require('../controllers/quizpersoController'); 

router.post('/resultado', quizController.salvarPontuacao); 

module.exports = router;