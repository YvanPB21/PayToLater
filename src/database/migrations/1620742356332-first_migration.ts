import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1620742356332 implements MigrationInterface {
    name = 'firstMigration1620742356332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Profile` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NULL, `lastname` varchar(255) NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(25) NOT NULL, `password` varchar(255) NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `profile_id` int NOT NULL, UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), UNIQUE INDEX `REL_23371445bd80cb3e413089551b` (`profile_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_23371445bd80cb3e413089551bf` FOREIGN KEY (`profile_id`) REFERENCES `Profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_23371445bd80cb3e413089551bf`");
        await queryRunner.query("DROP INDEX `REL_23371445bd80cb3e413089551b` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `Profile`");
    }

}
