import { inject, injectable } from 'tsyringe'
import { ICompanyRepository } from '../../repository/ICompanyRepository'
import { relocateMe } from '../../scrapper/relocateMe'
import { siaExplains } from '../../scrapper/siaExplains'

export enum CompanySource {
  RELOCATEME = 'relocateMe',
  SIAEXPLAINS = 'siaExplains',
}

@injectable()
export class CreateCompanyJobDataUseCase {
  constructor(
    @inject('CompanyRepository')
    private companyRepository: ICompanyRepository
  ) {}

  async execute(source: string): Promise<void> {
    let companies: any[] = []

    switch (source) {
      case CompanySource.RELOCATEME:
        companies = await relocateMe()
        break
      case CompanySource.SIAEXPLAINS:
        companies = await siaExplains()
        break
      default:
        throw new Error('Fonte Inválida')
    }

    for (let company of companies) {
      company.source = source
      await this.companyRepository.saveCompaniesInfo(company)
    }
  }
}
