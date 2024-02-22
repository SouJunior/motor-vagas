import { Company } from "../../../entities/Company.entity";
import { ISaveCompanyDTO } from "../dtos/SaveCompanies.dto";

export interface ICompanyRepository {
    saveCompaniesInfo(data: ISaveCompanyDTO): Promise<void>;
    findOneCompany(compName: string): Promise<Company>;
    listAll():Promise<Company[]>;
}