/*
  Warnings:

  - Added the required column `valorTotalInvestir` to the `Arbitragem` table without a default value. This is not possible if the table is not empty.

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
    "valorTotalInvestir" REAL NOT NULL,
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
INSERT INTO "new_Arbitragem" ("casa1Id", "casa2Id", "casa3Id", "casa4Id", "data", "esporte", "evento", "id", "ladoVencedor", "lucroEsperado", "odd1", "odd2", "odd3", "odd4", "resultado1", "resultado2", "resultado3", "resultado4", "stake1", "stake2", "stake3", "stake4", "status", "tipo", "usuarioId") SELECT "casa1Id", "casa2Id", "casa3Id", "casa4Id", "data", "esporte", "evento", "id", "ladoVencedor", "lucroEsperado", "odd1", "odd2", "odd3", "odd4", "resultado1", "resultado2", "resultado3", "resultado4", "stake1", "stake2", "stake3", "stake4", "status", "tipo", "usuarioId" FROM "Arbitragem";
DROP TABLE "Arbitragem";
ALTER TABLE "new_Arbitragem" RENAME TO "Arbitragem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF; 