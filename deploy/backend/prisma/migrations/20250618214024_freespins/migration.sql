-- CreateTable
CREATE TABLE "FreeSpin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "valorEstimado" REAL NOT NULL,
    "jogo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "dataObtencao" DATETIME NOT NULL,
    "dataExpiracao" DATETIME NOT NULL,
    "valorExtraido" REAL,
    "estrategia" TEXT,
    "observacoes" TEXT,
    CONSTRAINT "FreeSpin_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
); 