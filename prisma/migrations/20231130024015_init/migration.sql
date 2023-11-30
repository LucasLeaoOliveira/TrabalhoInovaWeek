-- CreateTable
CREATE TABLE "Aluno" (
    "idAluno" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Professor" (
    "idProfessor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Projeto" (
    "idProjeto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataHora" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAvaliacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeProjeto" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto" ("idProjeto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Criterio" (
    "idCriterio" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "avaliacaoId" INTEGER NOT NULL,
    CONSTRAINT "Criterio_avaliacaoId_fkey" FOREIGN KEY ("avaliacaoId") REFERENCES "Avaliacao" ("idAvaliacao") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlunoToProjeto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlunoToProjeto_A_fkey" FOREIGN KEY ("A") REFERENCES "Aluno" ("idAluno") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoToProjeto_B_fkey" FOREIGN KEY ("B") REFERENCES "Projeto" ("idProjeto") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AvaliacaoToProfessor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AvaliacaoToProfessor_A_fkey" FOREIGN KEY ("A") REFERENCES "Avaliacao" ("idAvaliacao") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AvaliacaoToProfessor_B_fkey" FOREIGN KEY ("B") REFERENCES "Professor" ("idProfessor") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_matricula_key" ON "Professor"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToProjeto_AB_unique" ON "_AlunoToProjeto"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToProjeto_B_index" ON "_AlunoToProjeto"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AvaliacaoToProfessor_AB_unique" ON "_AvaliacaoToProfessor"("A", "B");

-- CreateIndex
CREATE INDEX "_AvaliacaoToProfessor_B_index" ON "_AvaliacaoToProfessor"("B");
