import { AppDataSource } from "../../../../database/data-source";
import { Repository } from "typeorm";
import { ISaveCompanyDTO } from "../../dtos/SaveCompanies.dto";
import { ICompanyRepository } from "../ICompanyRepository";
import { Company } from "../../../../entities/Company.entity";

export interface IResponse {
    message: string,
    status: string
}

export class CompanyRepository implements ICompanyRepository {

    private repository: Repository<Company>

    constructor() {
        this.repository = AppDataSource.getRepository(Company)
    }

    async saveCompaniesInfo(data: ISaveCompanyDTO): Promise<void> {
        await this.repository.save(data)
    }

    async findOneCompany(compName: string): Promise<Company> {
        return await this.repository.findOne({ where: {name: compName}})
    }
    
    async listAll(): Promise<Company[]> {

        return await this.repository.find()

    }
}