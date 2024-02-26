import { Job } from "../../../entities/Job.entity";

export interface IResponse {
    status: number,
    message: string,
    data?: Job | Job[]
}