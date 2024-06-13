import { inject, injectable } from "tsyringe";
import { IJobRepository } from "../../repository/IJobRepository";
import { IResponse } from "../../interfaces/Job.interface";

@injectable()
export class DeleteJobsUseCase {
    constructor(
        @inject("JobRepository")
        private jobRepository: IJobRepository) {}

    async execute(jobIdS: string): Promise<IResponse> {     
        try {
            await this.jobRepository.deleteJobs(jobIdS)
            return { status: 200, message: `Jobs deleted successfully ${jobIdS}`}     
        } catch (error) {
            return { status: 500, message: "Failed to delete jobs"};
        }
    }
}