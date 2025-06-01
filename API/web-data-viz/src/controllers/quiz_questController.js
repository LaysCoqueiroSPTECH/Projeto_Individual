// quizController.js
const db = require('../database/conexao');

const salvarResultado = async (req, res) => {
    const { idUsuario, idQuiz, pontuacao } = req.body;

    try {
        await db.execute(
            `INSERT INTO RespostasQuiz (fkUsuario, fkQuiz, pontuacao) VALUES (?, ?, ?)`,
            [idUsuario, idQuiz, pontuacao]
        );
        res.status(200).json({ mensagem: "Pontuação salva com sucesso!" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao salvar a pontuação" });
    }
};

module.exports = { salvarResultado };
