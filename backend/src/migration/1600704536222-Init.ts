import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1600704536222 implements MigrationInterface {
    name = 'Init1600704536222'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `organization` (`user_cd` char(8) NOT NULL, `title` varchar(32) NOT NULL DEFAULT '', `company_cd` char(8) NOT NULL, `department_cd` char(8) NOT NULL, `group_cd` char(8) NOT NULL, `team_cd` char(8) NOT NULL, `company_name` varchar(32) NOT NULL, `department_name` varchar(32) NOT NULL, `group_name` varchar(32) NOT NULL, `team_name` varchar(32) NOT NULL, `primary` tinyint NOT NULL DEFAULT 0, `start_date` date NULL, `end_date` date NULL, PRIMARY KEY (`user_cd`, `title`, `company_cd`, `department_cd`, `group_cd`, `team_cd`, `company_name`, `department_name`, `group_name`, `team_name`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`code` char(8) NOT NULL, `firstName` varchar(32) NOT NULL, `lastName` varchar(32) NOT NULL, `delflg` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`code`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `personal_info` (`id` int NOT NULL AUTO_INCREMENT, `user_cd` char(8) NOT NULL, `key` varchar(32) NOT NULL, `value` varchar(255) NOT NULL, `delflg` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE VIEW `view_organized_user` AS SELECT `u`.`code` AS `user_cd`, `o`.`title` AS `title`, `o`.`company_cd` AS `company_cd`, `o`.`department_cd` AS `department_cd`, `o`.`group_cd` AS `group_cd`, `o`.`team_cd` AS `team_cd`, `o`.`company_name` AS `company_name`, `o`.`department_name` AS `department_name`, `o`.`group_name` AS `group_name`, `o`.`team_name` AS `team_name`, `o`.`primary` AS `primary`, `o`.`start_date` AS `start_date`, `o`.`end_date` AS `end_date`, u.lastname AS `lastname`, u.firstname AS `firstname` FROM `user` `u` LEFT JOIN `organization` `o` ON `u`.`code` = `o`.`user_cd` WHERE `u`.`delflg` = 0");
        await queryRunner.query("INSERT INTO `people`.`typeorm_metadata`(`type`, `schema`, `name`, `value`) VALUES (?, ?, ?, ?)", ["VIEW","people","view_organized_user","SELECT `u`.`code` AS `user_cd`, `o`.`title` AS `title`, `o`.`company_cd` AS `company_cd`, `o`.`department_cd` AS `department_cd`, `o`.`group_cd` AS `group_cd`, `o`.`team_cd` AS `team_cd`, `o`.`company_name` AS `company_name`, `o`.`department_name` AS `department_name`, `o`.`group_name` AS `group_name`, `o`.`team_name` AS `team_name`, `o`.`primary` AS `primary`, `o`.`start_date` AS `start_date`, `o`.`end_date` AS `end_date`, u.lastname AS `lastname`, u.firstname AS `firstname` FROM `user` `u` LEFT JOIN `organization` `o` ON `u`.`code` = `o`.`user_cd` WHERE `u`.`delflg` = 0"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM `people`.`typeorm_metadata` WHERE `type` = 'VIEW' AND `schema` = ? AND `name` = ?", ["people","view_organized_user"]);
        await queryRunner.query("DROP VIEW `view_organized_user`");
        await queryRunner.query("DROP TABLE `personal_info`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `organization`");
    }

}
