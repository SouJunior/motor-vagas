import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { Job } from "../entities/Job.entity"
import { Company } from "../entities/Company.entity"
dotenv.config();

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASS, DATABASE_NAME} = process.env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST,
    port: 5432,
    username: DATABASE_USER,
    password: DATABASE_PASS,
    database: DATABASE_NAME,
    synchronize: true,
    logging: true,
    migrations: ['src/../**/migrations/*{.ts,.js}'],
    //ssl: { rejectUnauthorized: false },
    entities: [Job, Company]
})
