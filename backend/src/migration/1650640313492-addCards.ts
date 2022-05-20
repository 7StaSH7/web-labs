import {MigrationInterface, QueryRunner} from "typeorm";

export class addCards1650640313492 implements MigrationInterface {
    name = 'addCards1650640313492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "card" ("id" SERIAL NOT NULL, "catId" text, "dogId" text, "imgSrc" text NOT NULL, "likesCount" smallint NOT NULL DEFAULT '0', CONSTRAINT "UQ_ccfd877855a23008788b987d17b" UNIQUE ("catId"), CONSTRAINT "UQ_1915b2ee2e1c8a4735a46650f97" UNIQUE ("dogId"), CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "card"`);
    }

}
