import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseStart1708608348373 implements MigrationInterface {
    name = 'DatabaseStart1708608348373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "jobs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "company" character varying NOT NULL, "location" character varying NOT NULL, "time" character varying NOT NULL, "link" character varying NOT NULL, "jobName" character varying NOT NULL, "created_date" TIMESTAMP NOT NULL DEFAULT now(), "visa" boolean NOT NULL, "description" character varying NOT NULL, "source" character varying NOT NULL, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "source" character varying NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
    }

}
