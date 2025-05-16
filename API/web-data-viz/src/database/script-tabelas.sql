CREATE DATABASE GreyVerse;
Use GreyVerse;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY auto_increment, 
email varchar (70),
dtNasc date, 
senha varchar (70)
);
CREATE TABLE Quiz (
    idQuiz INT PRIMARY KEY auto_increment,
    titulo VARCHAR(100) NOT NULL,
    descricao varchar(350),
    tipo varchar(45),
    Constraint checkTipo check (tipo in ('personalidade', 'conhecimento'))
);
CREATE TABLE Perguntas (
    idPerguntas INT PRIMARY KEY auto_increment,
    fkQuiz INT,
    texto varchar(200),
    Constraint fkQuizPerguntas FOREIGN KEY (fkQuiz) REFERENCES Quiz(idQuiz)
);
CREATE TABLE Respostas (
    idRespostas INT PRIMARY KEY auto_increment,
    fkPergunta INT,
    texto varchar(200),
    correta TINYINT,  -- quiz de conhecimento
    personagem VARCHAR(50), -- quiz de personalidade
    FOREIGN KEY (fkPergunta) REFERENCES Perguntas(idPerguntas)
);
CREATE TABLE RespostasQuiz (
    fkUsuario INT,
    fkQuiz INT,
    dtParticipacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    pontuacao INT,
    personagemResult VARCHAR(100),
    CONSTRAINT pkusuarioquiz PRIMARY KEY (fkUsuario , fkQuiz),
    CONSTRAINT fkUsuarioQuiz FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario), FOREIGN KEY (fkQuiz) REFERENCES Quiz (idQuiz)
);
