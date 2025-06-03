CREATE DATABASE GreyVerse;
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

CREATE TABLE Perguntas (
    idPerguntas INT PRIMARY KEY AUTO_INCREMENT,
    fkQuiz INT,
    texto VARCHAR(200),
    FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz)
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

