import { AppDataSource } from "../../../../database/data-source";
import { Repository } from "typeorm";
import { IJobRepository } from "../IJobRepository";
import { Job } from "../../../../entities/Job.entity";
import { IListJobDTO } from "../../dtos/ListJobs.dto";

export class JobRepository implements IJobRepository {

    private repository: Repository<Job>

    constructor() {
        this.repository = AppDataSource.getRepository(Job)
    }

    async saveJobs(data: IListJobDTO): Promise<void> {

        await this.repository.save(data)
    }

    async listJobs(): Promise<Job[]> {

       return await this.repository.find()
    }

    async findJob(jobName: string): Promise<Job> {

        return await this.repository.findOne({where: { jobName}})
     }

     async deleteJobs(): Promise<void> {
        try {
         await this.repository.delete({})
        } catch( error: any) {
            console.log(error)
        }
     }

}