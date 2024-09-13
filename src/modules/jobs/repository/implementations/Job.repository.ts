import { AppDataSource } from "../../../../database/data-source";
import { Like, Repository } from "typeorm";
import { IJobRepository } from "../IJobRepository";
import { Job } from "../../../../entities/Job.entity";
import { IListJobDTO } from "../../dtos/ListJobs.dto";
import { ListJobsParams } from "../../types/ListJobParams";

export class JobRepository implements IJobRepository {
  private repository: Repository<Job>;

  constructor() {
    this.repository = AppDataSource.getRepository(Job);
  }

  async saveJobs(data: IListJobDTO): Promise<void> {
    await this.repository.save(data);
  }

  async listJobs(params: ListJobsParams): Promise<Job[]> {
    let whereCase = [];
    if (params.filter && params.filter !== "") {
      const scapedFilter = `%${params.filter}%`;
      whereCase = [
        { title: Like(scapedFilter) },
        { jobName: Like(scapedFilter) },
        { description: Like(scapedFilter) },
        { company: Like(scapedFilter) },
      ];
    }

    return await this.repository.find({
      where: whereCase,
      order: {
        created_date: params.sort,
      },
    });
  }

  async findJob(jobName: string): Promise<Job> {
    return await this.repository.findOne({ where: { jobName } });
  }

  async deleteJobs(id: string): Promise<void> {
    try {
      await this.repository.delete({ id });
    } catch (error: any) {
      console.log(error);
    }
  }
}
