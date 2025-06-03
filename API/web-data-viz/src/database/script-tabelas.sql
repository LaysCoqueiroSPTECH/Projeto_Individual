CREATE DATABASE Grey
Verse;
Use GreyVerse;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY auto_increment, 
nome varchar(45),
email varchar (70),
senha varchar (70)
);

CREATE TABLE Quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(350),
    tipo varchar(255)
    Constraint chk_tipo CHECK (tipo in ('personalidade', 'conhecimento'))
);

CREATE TABLE RespostasQuiz (
    idRespostasQuiz INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkQuiz INT,
    dtParticipacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    pontuacao INT DEFAULT NULL, 
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz)
);

select * from Usuario;
select * from RespostasQuiz;

SELECT * FROM Usuario JOIN RespostasQuiz;

INSERT INTO Quiz (titulo, tipo) VALUES ('Quiz de Conhecimento Grey\'s Anatomy', 'conhecimento');

CREATE VIEW vw_ranking_usuarios AS SELECT u.idUsuario, u.nome, MAX(Rq.pontuacao) AS pontuacao_total FROM Usuario u JOIN RespostasQuiz Rq on Rq.fkUsuario = u.idUsuario GROUP BY u.idUsuario,  u.nome;
SELECT * FROM vw_ranking_usuarios;

CREATE VIEW vw_tentativas_desempenho AS SELECT Rq.FkUsuario, Rq.FkQuiz AS id_QUIZ, Rq.pontuacao AS pontuacao_usuario FROM RespostasQuiz Rq ORDER BY Rq.fkUsuario, Rq.dtParticipacao;
SELECT * FROM vw_tentativas_desempenho;

CREATE VIEW vw_percentual_acertos AS
SELECT
    fkQuiz AS FkQuiz,
    AVG(pontuacao) AS media_pontuacao_geral
FROM RespostasQuiz
GROUP BY fkQuiz;

SELECT * FROM vw_percentual_acertos;

CREATE VIEW vw_kpis_usuario AS
SELECT
    fkUsuario AS idUsuario,
    AVG(pontuacao) AS media_pontuacao_usuario,
    COUNT(*) AS total_tentativas
FROM RespostasQuiz
GROUP BY fkUsuario;

SELECT * FROM vw_kpis_usuario;

SELECT * FROM vw_tentativas_desempenho WHERE FkUsuario = 1;