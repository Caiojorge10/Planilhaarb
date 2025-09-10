/*
  Warnings:

  - You are about to drop the column `dataExpiracao` on the `FreeSpin` table. All the data in the column will be lost.
  - You are about to drop the column `dataObtencao` on the `FreeSpin` table. All the data in the column will be lost.
  - You are about to drop the column `estrategia` on the `FreeSpin` table. All the data in the column will be lost.
  - You are about to drop the column `jogo` on the `FreeSpin` table. All the data in the column will be lost.
  - You are about to drop the column `observacoes` on the `FreeSpin` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `FreeSpin` table. All the data in the column will be lost.
  - You are about to drop the column `valorEstimado` on the `FreeSpin` table. All the data in the column will be lost.
  - You are about to drop the column `valorExtraido` on the `FreeSpin` table. All the data in the column will be lost.
  - Added the required column `valorGanho` to the `FreeSpin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FreeSpin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "casaId" INTEGER NOT NULL,
    "valorGanho" REAL NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FreeSpin_casaId_fkey" FOREIGN KEY ("casaId") REFERENCES "Casa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FreeSpin" ("casaId", "id") SELECT "casaId", "id" FROM "FreeSpin";
DROP TABLE "FreeSpin";
ALTER TABLE "new_FreeSpin" RENAME TO "FreeSpin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF; 