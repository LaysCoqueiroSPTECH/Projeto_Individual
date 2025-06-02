
const Usuario = require('../models/usuarioModel');
const quizModel = require('../models/quizModel');

exports.salvarPontuacao = (req, res) => {
    const { usuarioId, pontuacao } = req.body;
    const idQuiz = 1; 

    if (!usuarioId) {
        return res.status(400).json({ error: "ID do usuário é obrigatório!" });
    }
    if (pontuacao === undefined) {
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
};

exports.obterRanking = async (req, res) => {
    try {

        const instrucaoRanking = `
            SELECT u.idUsuario, u.nome, rq.pontuacao
            FROM RespostasQuiz rq
            JOIN Usuario u ON rq.fkUsuario = u.idUsuario
            WHERE rq.fkQuiz = 1 AND rq.pontuacao IS NOT NULL
            ORDER BY rq.pontuacao DESC;
        `;

        const rankingData = await database.executar(instrucaoRanking);
        res.status(200).json(rankingData);
    } catch (error) {
        console.error('Erro ao obter ranking:', error);
        res.status(500).json({ message: 'Erro ao obter ranking.' });
    }
};