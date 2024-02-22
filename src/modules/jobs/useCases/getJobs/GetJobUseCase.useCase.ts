import { inject, injectable } from "tsyringe"
import { IJobRepository } from "../../repository/IJobRepository";
import { scraper } from "../../scrapper";
import { parsPath } from "../../scrapper/parsPath";

@injectable()
export class GetJobUseCase {
    constructor(
        @inject("JobRepository")
        private jobRepository: IJobRepository) {}

    async execute(locations: string[], keyword:string, description: boolean): Promise<void> {
        
        try {
        const jobsFromLinkedin = await scraper(locations, keyword, description)
        
        for (let job of jobsFromLinkedin) {
            const jobName: string = parsPath(job?.link);
            job.jobName = jobName

            await this.jobRepository.save(job)
        }
        
        } catch (error) {
            console.log(error.message)
        }
    }
}