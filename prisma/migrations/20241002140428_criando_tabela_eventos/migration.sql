-- CreateTable
CREATE TABLE `events` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `event_type` VARCHAR(191) NOT NULL,
    `event_format` VARCHAR(191) NOT NULL,
    `event_day` DATETIME(3) NOT NULL,
    `application_period` DATETIME(3) NOT NULL,
    `event_value` DOUBLE NOT NULL DEFAULT 0.0,
    `event_limit` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
