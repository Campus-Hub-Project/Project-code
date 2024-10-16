/*
  Warnings:

  - You are about to drop the column `application_period_from` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `application_period_to` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_day_from` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_day_to` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_format` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_limit` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_time` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_type` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_value` on the `events` table. All the data in the column will be lost.
  - You are about to drop the `_event_participants` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ends` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `format` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starts` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subs_ends` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subs_starts` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_event_participants` DROP FOREIGN KEY `_event_participants_A_fkey`;

-- DropForeignKey
ALTER TABLE `_event_participants` DROP FOREIGN KEY `_event_participants_B_fkey`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `application_period_from`,
    DROP COLUMN `application_period_to`,
    DROP COLUMN `event_day_from`,
    DROP COLUMN `event_day_to`,
    DROP COLUMN `event_format`,
    DROP COLUMN `event_limit`,
    DROP COLUMN `event_time`,
    DROP COLUMN `event_type`,
    DROP COLUMN `event_value`,
    ADD COLUMN `ends` DATETIME(3) NOT NULL,
    ADD COLUMN `format` VARCHAR(191) NOT NULL,
    ADD COLUMN `participants_limit` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `price` DOUBLE NOT NULL DEFAULT 0.0,
    ADD COLUMN `starts` DATETIME(3) NOT NULL,
    ADD COLUMN `subs_ends` DATETIME(3) NOT NULL,
    ADD COLUMN `subs_starts` DATETIME(3) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_event_participants`;

-- CreateTable
CREATE TABLE `_participants` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_participants_AB_unique`(`A`, `B`),
    INDEX `_participants_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_participants` ADD CONSTRAINT `_participants_A_fkey` FOREIGN KEY (`A`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_participants` ADD CONSTRAINT `_participants_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
