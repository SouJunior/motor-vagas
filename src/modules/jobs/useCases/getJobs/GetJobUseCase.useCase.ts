import { inject, injectable } from "tsyringe"
import { IJobRepository } from "../../repository/IJobRepository";
import { scraper } from "../../scrapper";
import { parsPath } from "../../scrapper/parsPath";
import { IResponse } from "../../interfaces/Job.interface";

@injectable()
export class GetJobUseCase {
    constructor(
        @inject("JobRepository")
        private jobRepository: IJobRepository) {}

    async execute(locations: string[], keyword:string, description: boolean): Promise<IResponse> {
        
        try {
        const jobsFromLinkedin = await scraper(locations, keyword, description)
        
        for (let job of jobsFromLinkedin) {
            const jobName: string = parsPath(job?.link);
            job.jobName = jobName

            const jobExists = await this.jobRepository.findJob(job.jobName)

            if (jobExists) {
                continue
            } else {

                await this.jobRepository.saveJobs(job)
            }

        }

        return { status: 200, message: "Jobs saved successfully"}
        
        } catch (error) {
            console.log(error.message)
        }
    }
}