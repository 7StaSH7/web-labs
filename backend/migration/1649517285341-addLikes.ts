import {MigrationInterface, QueryRunner} from "typeorm";

export class addLikes1649517285341 implements MigrationInterface {
    name = 'addLikes1649517285341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "like" ("id" SERIAL NOT NULL, "catId" text, "dogId" text, "userIdId" integer, CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_df2272f102353bff4ffcb3edb78" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_df2272f102353bff4ffcb3edb78"`);
        await queryRunner.query(`DROP TABLE "like"`);
    }

}
