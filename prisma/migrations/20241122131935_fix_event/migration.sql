/*
  Warnings:

  - You are about to drop the column `day` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `subs_ends` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `subs_starts` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `sumary` on the `events` table. All the data in the column will be lost.
  - Added the required column `day_ends` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day_starts` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subs_day_ends` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subs_day_starts` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `day`,
    DROP COLUMN `subs_ends`,
    DROP COLUMN `subs_starts`,
    DROP COLUMN `sumary`,
    ADD COLUMN `day_ends` TIME NOT NULL,
    ADD COLUMN `day_starts` TIME NOT NULL,
    ADD COLUMN `subs_day_ends` DATETIME(3) NOT NULL,
    ADD COLUMN `subs_day_starts` DATETIME(3) NOT NULL,
    ADD COLUMN `summary` VARCHAR(191) NOT NULL;
