-- CreateTable
CREATE TABLE "Perca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Perca_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Perca_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- AlterTable
ALTER TABLE "Movimentacao" ADD COLUMN "percaId" INTEGER;
ALTER TABLE "Movimentacao" ADD COLUMN "arbitragemId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Movimentacao_percaId_key" ON "Movimentacao"("percaId"); 