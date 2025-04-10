/*
  Warnings:

  - You are about to drop the column `criadaEm` on the `jogos` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_jogos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "anoLancamento" TEXT NOT NULL,
    "empresaDesenvolvedora" TEXT NOT NULL,
    "generos" TEXT NOT NULL,
    "plataformasDisponiveis" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_jogos" ("anoLancamento", "createdAt", "empresaDesenvolvedora", "generos", "id", "image", "plataformasDisponiveis", "preco", "titulo", "updatedAt") SELECT "anoLancamento", "createdAt", "empresaDesenvolvedora", "generos", "id", "image", "plataformasDisponiveis", "preco", "titulo", "updatedAt" FROM "jogos";
DROP TABLE "jogos";
ALTER TABLE "new_jogos" RENAME TO "jogos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
