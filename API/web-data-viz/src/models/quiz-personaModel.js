var database = require("../database/config");

function salvarResultado(idUsuario, idQuiz, personagemResult) {
   var instrucao = `
    INSERT INTO RespostasQuiz (fkUsuario, fkQuiz, personagemResult)
    VALUES (?, 2, ?);
`;
return database.executar(instrucao, [idUsuario, idQuiz, personagemResult]);

;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarResultado
};
