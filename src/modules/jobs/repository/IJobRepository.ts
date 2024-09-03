import { Job } from '../../../entities/Job.entity'
import { IListJobDTO } from '../dtos/ListJobs.dto'

export interface IJobRepository {
  saveJobs(data: IListJobDTO): Promise<void>
  listJobs(): Promise<Job[]>
  findJob(jobName: string): Promise<Job>
  deleteJobs(jobIds: string): Promise<void>
  countJobs(): Promise<number>
}
