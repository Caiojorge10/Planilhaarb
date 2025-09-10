-- AlterTable
ALTER TABLE "Arbitragem" ADD COLUMN "casa5Id" INTEGER;
ALTER TABLE "Arbitragem" ADD COLUMN "odd5" REAL;
ALTER TABLE "Arbitragem" ADD COLUMN "stake5" REAL;
ALTER TABLE "Arbitragem" ADD COLUMN "resultado5" TEXT;
ALTER TABLE "Arbitragem" ADD COLUMN "freebet1" BOOLEAN DEFAULT false;
ALTER TABLE "Arbitragem" ADD COLUMN "freebet2" BOOLEAN DEFAULT false;
ALTER TABLE "Arbitragem" ADD COLUMN "freebet3" BOOLEAN DEFAULT false;
ALTER TABLE "Arbitragem" ADD COLUMN "freebet4" BOOLEAN DEFAULT false;
ALTER TABLE "Arbitragem" ADD COLUMN "freebet5" BOOLEAN DEFAULT false;

-- Removido AddForeignKey para compatibilidade com SQLite 