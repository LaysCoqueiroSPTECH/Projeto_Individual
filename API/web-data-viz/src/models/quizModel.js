var database = require("../database/config");

function salvarResultado(idUsuario, idQuiz, pontuacao) {
    var instrucao = `
        INSERT INTO RespostasQuiz (fkUsuario, fkQuiz, pontuacao)
        VALUES (${idUsuario}, ${idQuiz}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarResultado
};

