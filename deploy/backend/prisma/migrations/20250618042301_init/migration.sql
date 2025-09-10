-- CreateTable
CREATE TABLE "Casa" (
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
    "observacoes" TEXT
);

-- CreateTable
CREATE TABLE "Arbitragem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "evento" TEXT NOT NULL,
    "esporte" TEXT NOT NULL,
    "casa1Id" INTEGER NOT NULL,
    "casa2Id" INTEGER NOT NULL,
    "odd1" REAL NOT NULL,
    "odd2" REAL NOT NULL,
    "stake1" REAL NOT NULL,
    "stake2" REAL NOT NULL,
    "lucroEsperado" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'em_andamento',
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Arbitragem_casa1Id_fkey" FOREIGN KEY ("casa1Id") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Arbitragem_casa2Id_fkey" FOREIGN KEY ("casa2Id") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Freebet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "dataObtencao" DATETIME NOT NULL,
    "dataExpiracao" DATETIME NOT NULL,
    "valorExtraido" REAL,
    "estrategia" TEXT,
    CONSTRAINT "Freebet_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
); 