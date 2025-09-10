-- CreateTable
CREATE TABLE "Movimentacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacao" TEXT,
    CONSTRAINT "Movimentacao_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
); 