/*
  Warnings:

  - Made the column `ends` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subs_ends` on table `events` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `ends` DATETIME(3) NOT NULL,
    MODIFY `subs_ends` DATETIME(3) NOT NULL;
