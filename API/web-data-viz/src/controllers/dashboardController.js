var dashboardModel = require("../models/dashboardModel");

function handleError(res, error, message) {
    console.error(message, error.sqlMessage || error.message || error);
    res.status(500).json({ message, error: error.sqlMessage || error.message || error });
}

function graficoRanking(req, res) {
    dashboardModel.graficoRanking()
        .then((resultado) => res.status(200).json(resultado))
        .catch((erro) => handleError(res, erro, "Erro ao buscar ranking de usuários"));
}

function graficoEvolucao(req, res) {
    const idUsuario = req.params.idUsuario;

    if (!idUsuario || isNaN(idUsuario)) {
        return res.status(400).send("O ID do usuário é obrigatório e deve ser um número!");
    }

    dashboardModel.graficoEvolucao(idUsuario)
        .then((resultado) => res.status(200).json(resultado))
        .catch((erro) => handleError(res, erro, "Erro ao buscar evolução de desempenho"));
}

function kpiMediaGeral(req, res) {
    dashboardModel.kpiMediaGeral()
        .then((resultado) => res.status(200).json(resultado))
        .catch((erro) => handleError(res, erro, "Erro ao buscar percentual de acertos"));
}

function KpiMediaUsuario(req, res) {
    const idUsuario = req.params.idUsuario;

    if (!idUsuario || isNaN(idUsuario)) {
        return res.status(400).send("O ID do usuário é obrigatório e deve ser um número!");
    }

    dashboardModel.KpiMediaUsuario(idUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(404).send("KPIs não encontradas para o usuário.");
            }
        })
        .catch((erro) => handleError(res, erro, "Erro ao buscar KPIs do usuário"));
}

module.exports = {
    graficoRanking,
    graficoEvolucao,
    kpiMediaGeral,
    KpiMediaUsuario
};
