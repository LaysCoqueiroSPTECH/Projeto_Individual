const quizModel = require('../models/quiz-personaModel');

function salvarPontuacao(req, res) {
    var usuarioId = req.body.usuarioId;
    var personagemResult = req.body.personagemResult;
    const idQuiz = 1; // Defina o ID do quiz (certifique-se que exista no seu banco)

    if (!usuarioId) {
        return res.status(400).json({ error: "ID do usuário é obrigatório!" });
    }
    if (!personagemResult) {
    return res.status(400).json({ error: "Resultado do personagem é obrigatório!" });
}

    quizModel.salvarResultado(usuarioId, idQuiz, personagemResult)
        .then(() => {
            console.log("Resultado do quiz salvo com sucesso!");
            res.status(200).json({ message: "Pontuação salva com sucesso!" });
        })
        .catch(err => {
            console.error("Erro ao salvar resultado do quiz:", err);
            res.status(500).json({ error: "Erro interno ao salvar o resultado do quiz." });
        });
}

module.exports = {
    salvarPontuacao
};