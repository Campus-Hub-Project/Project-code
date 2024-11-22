/*
  Warnings:

  - You are about to alter the column `day_ends` on the `events` table. The data in that column could be lost. The data in that column will be cast from `Time(0)` to `DateTime(3)`.
  - You are about to alter the column `day_starts` on the `events` table. The data in that column could be lost. The data in that column will be cast from `Time(0)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `day_ends` DATETIME(3) NOT NULL,
    MODIFY `day_starts` DATETIME(3) NOT NULL;
