import { Router } from 'express'
import { GetRelocateMeCompanyController } from '../modules/companies/useCases/getCompanies/GetRelocateMeCompanyController.controller'
import { GetSiaExplainsCompanyController } from '../modules/companies/useCases/getCompanies/GetSiaExplainsCompanyController.controller'
import { GetCompanyController } from '../modules/companies/useCases/getCompanies/GetCompanyController.controller'

const companyRouter = Router()

const getRelocateMeCompanyController = new GetRelocateMeCompanyController()
const getSiaExplainsCompanyController = new GetSiaExplainsCompanyController()
const getCompanyController = new GetCompanyController()

companyRouter.post('/relocateMe', getRelocateMeCompanyController.handle)
companyRouter.post('/siaExplains', getSiaExplainsCompanyController.handle)
companyRouter.post('/:name/scrapp', getCompanyController.handle)

export { companyRouter }
