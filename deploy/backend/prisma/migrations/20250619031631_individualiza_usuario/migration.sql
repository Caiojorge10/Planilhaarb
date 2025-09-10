/*
  Warnings:

  - You are about to drop the column `criadoEm` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `senhaHasheada` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Arbitragem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Casa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `FreeSpin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Freebet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Movimentacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Arbitragem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "evento" TEXT NOT NULL,
    "esporte" TEXT NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT '2_resultados',
    "casa1Id" INTEGER NOT NULL,
    "odd1" REAL NOT NULL,
    "stake1" REAL NOT NULL,
    "resultado1" TEXT NOT NULL,
    "casa2Id" INTEGER NOT NULL,
    "odd2" REAL NOT NULL,
    "stake2" REAL NOT NULL,
    "resultado2" TEXT NOT NULL,
    "casa3Id" INTEGER,
    "odd3" REAL,
    "stake3" REAL,
    "resultado3" TEXT,
    "casa4Id" INTEGER,
    "odd4" REAL,
    "stake4" REAL,
    "resultado4" TEXT,
    "lucroEsperado" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'identificada',
    "ladoVencedor" TEXT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Arbitragem_casa1Id_fkey" FOREIGN KEY ("casa1Id") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Arbitragem_casa2Id_fkey" FOREIGN KEY ("casa2Id") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Arbitragem_casa3Id_fkey" FOREIGN KEY ("casa3Id") REFERENCES "Casa" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Arbitragem_casa4Id_fkey" FOREIGN KEY ("casa4Id") REFERENCES "Casa" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Arbitragem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Arbitragem" ("casa1Id", "casa2Id", "casa3Id", "casa4Id", "data", "esporte", "evento", "id", "ladoVencedor", "lucroEsperado", "odd1", "odd2", "odd3", "odd4", "resultado1", "resultado2", "resultado3", "resultado4", "stake1", "stake2", "stake3", "stake4", "status", "tipo") SELECT "casa1Id", "casa2Id", "casa3Id", "casa4Id", "data", "esporte", "evento", "id", "ladoVencedor", "lucroEsperado", "odd1", "odd2", "odd3", "odd4", "resultado1", "resultado2", "resultado3", "resultado4", "stake1", "stake2", "stake3", "stake4", "status", "tipo" FROM "Arbitragem";
DROP TABLE "Arbitragem";
ALTER TABLE "new_Arbitragem" RENAME TO "Arbitragem";
CREATE TABLE "new_Casa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "licenca" TEXT,
    "avaliacao" REAL,
    "status" TEXT NOT NULL DEFAULT 'ativa',
    "bonusBoasVindas" TEXT,
    "bonusRecarga" TEXT,
    "tempoSaque" TEXT,
    "metodosPagamento" TEXT,
    "telefone" TEXT,
    "email" TEXT,
    "site" TEXT,
    "observacoes" TEXT,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Casa_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Casa" ("avaliacao", "bonusBoasVindas", "bonusRecarga", "email", "id", "licenca", "metodosPagamento", "nome", "observacoes", "pais", "site", "status", "telefone", "tempoSaque") SELECT "avaliacao", "bonusBoasVindas", "bonusRecarga", "email", "id", "licenca", "metodosPagamento", "nome", "observacoes", "pais", "site", "status", "telefone", "tempoSaque" FROM "Casa";
DROP TABLE "Casa";
ALTER TABLE "new_Casa" RENAME TO "Casa";
CREATE TABLE "new_FreeSpin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "valorGanho" REAL NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "FreeSpin_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FreeSpin_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FreeSpin" ("casaId", "data", "id", "valorGanho") SELECT "casaId", "data", "id", "valorGanho" FROM "FreeSpin";
DROP TABLE "FreeSpin";
ALTER TABLE "new_FreeSpin" RENAME TO "FreeSpin";
CREATE TABLE "new_Freebet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "dataObtencao" DATETIME NOT NULL,
    "dataExpiracao" DATETIME NOT NULL,
    "valorExtraido" REAL,
    "estrategia" TEXT,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Freebet_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Freebet_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Freebet" ("casaId", "dataExpiracao", "dataObtencao", "estrategia", "id", "status", "tipo", "valor", "valorExtraido") SELECT "casaId", "dataExpiracao", "dataObtencao", "estrategia", "id", "status", "tipo", "valor", "valorExtraido" FROM "Freebet";
DROP TABLE "Freebet";
ALTER TABLE "new_Freebet" RENAME TO "Freebet";
CREATE TABLE "new_Movimentacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacao" TEXT,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Movimentacao_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Movimentacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Movimentacao" ("casaId", "data", "id", "observacao", "tipo", "valor") SELECT "casaId", "data", "id", "observacao", "tipo", "valor" FROM "Movimentacao";
DROP TABLE "Movimentacao";
ALTER TABLE "new_Movimentacao" RENAME TO "Movimentacao";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF; 