import { container } from "tsyringe"
import { IJobRepository} from "../../modules/jobs/repository/IJobRepository"
import { JobRepository} from "../../modules/jobs/repository/implementations/Job.repository"
import { ICompanyRepository } from "../../modules/companies/repository/ICompanyRepository"
import { CompanyRepository } from "../../modules/companies/repository/implementations/Company.repository"

container.registerSingleton<IJobRepository>(
    "JobRepository",
    JobRepository
)
container.registerSingleton<ICompanyRepository>(
    "CompanyRepository",
    CompanyRepository
)