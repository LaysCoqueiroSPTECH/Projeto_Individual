var database = require("../database/config");

function graficoRanking() {
    var instrucao = `
       SELECT * FROM vw_ranking_usuarios LIMIT 3;
    `;
    console.log("Executando instrução SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function graficoEvolucao(idUsuario) {
    var instrucao = `
        SELECT * FROM vw_tentativas_desempenho WHERE FkUsuario = ${idUsuario};
    `;
    console.log("Executando instrução SQL para evolução de desempenho:\n" + instrucao);
    return database.executar(instrucao);
}

function kpiMediaGeral() {
    var instrucao = `
       SELECT * FROM vw_percentual_acertos;
    `;
    console.log("Executando instrução SQL para percentual de acertos:\n" + instrucao);
    return database.executar(instrucao);
}

function KpiMediaUsuario(idUsuario) {
    var instrucao = `
        SELECT * FROM vw_kpis_usuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando instrução SQL para KPIs de usuário:\n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    graficoRanking,
    graficoEvolucao,
    kpiMediaGeral,
    KpiMediaUsuario
};
