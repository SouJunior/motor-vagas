import { IListJobDTO } from "../dtos/ListJobs.dto";

export interface IJobRepository {
    save(data: IListJobDTO ): Promise<void>;
}