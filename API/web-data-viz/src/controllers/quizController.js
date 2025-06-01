const quizModel = require('../models/quizModel');

function salvarPontuacao(req, res) {
    var usuarioId = req.body.usuarioId;
    var pontuacao = req.body.pontuacao;
    const idQuiz = 1; // Defina o ID do quiz (certifique-se que exista no seu banco)

    if (!usuarioId) {
        return res.status(400).json({ error: "ID do usuário é obrigatório!" });
    }
    if (pontuacao == undefined) {
    return res.status(400).json({ error: "Pontuação é obrigatória!" });
}


    quizModel.salvarResultado(usuarioId, idQuiz, pontuacao)
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