import { inject, injectable } from "tsyringe"
import { ICompanyRepository } from "../../repository/ICompanyRepository";
import { relocateMe } from "../../scrapper/relocateMe";

@injectable()
export class GetRelocateMeCompanyUseCase {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository) {}

    async execute(): Promise<void> {
        const relocateMeComps = await relocateMe()

        for (let company of relocateMeComps) {

            company.source = "relocate.me"

            this.companyRepository.saveCompaniesInfo(company)
        }
    } 
}
