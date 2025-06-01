var express = require('express');
var router = express.Router();

// POST /quiz/salvar
router.post('/salvar', (req, res) => {
    const { nome, pontuacao } = req.body;

    console.log(`Recebido do quiz: ${nome} - ${pontuacao}`);

    // Aqui você pode salvar no banco de dados ou arquivo, se quiser
    res.json({ mensagem: 'Pontuação recebida com sucesso!' });
});

module.exports = router;