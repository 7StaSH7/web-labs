import {MigrationInterface, QueryRunner} from "typeorm";

export class fixLikes1651850688360 implements MigrationInterface {
    name = 'fixLikes1651850688360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "like" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "like" DROP COLUMN "cardId"`);
        await queryRunner.query(`ALTER TABLE "like" ADD "cardId" integer`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_e8fb739f08d47955a39850fac23" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_f307ee29ce161ef47e62803cdcd" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_f307ee29ce161ef47e62803cdcd"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_e8fb739f08d47955a39850fac23"`);
        await queryRunner.query(`ALTER TABLE "like" DROP COLUMN "cardId"`);
        await queryRunner.query(`ALTER TABLE "like" ADD "cardId" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "like" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "like" ADD "userId" text NOT NULL`);
    }

}
