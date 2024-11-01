/*
  Warnings:

  - You are about to drop the column `price` on the `events` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_user_id_fkey`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `price`;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
