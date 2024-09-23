import { inject, injectable } from 'tsyringe'
import { IJobRepository } from '../../repository/IJobRepository'
import { IResponse } from '../../interfaces/Job.interface'
import { count } from 'console'

@injectable()
export class GetJobsNumberUseCase {
  constructor(
    @inject('JobRepository')
    private jobRepository: IJobRepository
  ) {}

  async execute(): Promise<number> {
    try {
      const Jobs = await this.jobRepository.countJobs()

      return Jobs
    } catch (error) {
      console.log(error.message)
    }
  }
}
