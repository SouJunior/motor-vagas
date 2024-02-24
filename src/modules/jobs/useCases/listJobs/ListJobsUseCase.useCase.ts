import { inject, injectable } from "tsyringe";
import { IJobRepository } from "../../repository/IJobRepository";
import { IResponse } from "../../interfaces/Job.interface";

@injectable()
export class ListJobsUseCase {
    constructor(
        @inject("JobRepository")
        private jobRepository: IJobRepository) {}

    async execute(): Promise<IResponse> {
        
        try {
           const jobs = await this.jobRepository.listJobs()

        return { status: 200, data: jobs, message: "Jobs listed successfully"}
        
        } catch (error) {
            console.log(error.message)
        }
    }
}