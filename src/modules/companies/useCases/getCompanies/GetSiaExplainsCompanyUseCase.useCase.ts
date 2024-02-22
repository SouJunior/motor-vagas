import { inject, injectable } from "tsyringe"
import { ICompanyRepository } from "../../repository/ICompanyRepository";
import { siaExplains } from "../../scrapper/siaExplains";

@injectable()
export class GetSiaExplainsCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository) {}

    async execute(): Promise<void> {
        const siaExplainsComps = await siaExplains()

        for (let company of siaExplainsComps) {

            company.source = "siaExplains"

            this.companyRepository.saveCompaniesInfo(company)
        }
    } 
}
