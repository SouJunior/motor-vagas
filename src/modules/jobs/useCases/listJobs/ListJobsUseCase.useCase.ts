import { inject, injectable } from "tsyringe";
import { IJobRepository } from "../../repository/IJobRepository";
import { IResponse } from "../../interfaces/Job.interface";
import { ListJobsParams } from "../../types/ListJobParams";

@injectable()
export class ListJobsUseCase {
  constructor(
    @inject("JobRepository")
    private jobRepository: IJobRepository
  ) {}

  async execute(params: ListJobsParams): Promise<IResponse> {
    try {
      const jobs = await this.jobRepository.listJobs(params);
      return { status: 200, data: jobs, message: "Jobs listed successfully" };
    } catch (error) {
      console.log(error.message);
    }
  }
}
