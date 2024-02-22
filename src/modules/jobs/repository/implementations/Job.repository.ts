import { AppDataSource } from "../../../../database/data-source";
import { Repository } from "typeorm";
import { IJobRepository } from "../IJobRepository";
import { ISaveJobDTO } from "../../dtos/SaveJobs.dto";
import { Job } from "../../../../entities/Job.entity";
import { IListJobDTO } from "../../dtos/ListJobs.dto";

export interface IResponse {
    message: string,
    status: string
}

export class JobRepository implements IJobRepository {

    private repository: Repository<Job>

    constructor() {
        this.repository = AppDataSource.getRepository(Job)
    }

    async save(data: IListJobDTO): Promise<void> {

        await this.repository.save(data)
    }

}