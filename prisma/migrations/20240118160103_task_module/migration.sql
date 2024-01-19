/*
  Warnings:

  - You are about to drop the column `contetn` on the `Task` table. All the data in the column will be lost.
  - Added the required column `content` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL
);
INSERT INTO "new_Task" ("completed", "created_at", "id") SELECT "completed", "created_at", "id" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
