import { inject, injectable } from "tsyringe";
import { IJobRepository } from "../../repository/IJobRepository";
import { IResponse } from "../../interfaces/Job.interface";

@injectable()
export class DeleteJobsUseCase {
    constructor(
        @inject("JobRepository")
        private jobRepository: IJobRepository) {}

    async execute(): Promise<IResponse> {
        
        try {
           await this.jobRepository.deleteJobs()

        return { status: 200, message: "Jobs deleted successfully"}
        
        } catch (error) {
            console.log(error.message)
        }
    }
}