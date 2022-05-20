import {MigrationInterface, QueryRunner} from "typeorm";

export class addLikes1651849623103 implements MigrationInterface {
    name = 'addLikes1651849623103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "like" ("id" SERIAL NOT NULL, "userId" text NOT NULL, "cardId" text NOT NULL, CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "like"`);
    }

}
