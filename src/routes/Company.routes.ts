import { Router } from 'express'
import { GetRelocateMeCompanyController } from '../modules/companies/useCases/getCompanies/GetRelocateMeCompanyController.controller'
import { GetSiaExplainsCompanyController } from '../modules/companies/useCases/getCompanies/GetSiaExplainsCompanyController.controller'
import { CreateCompanyJobDataController } from '../modules/companies/useCases/getCompanies/CreateCompanyJobDataController.controller.ts'

const companyRouter = Router()

const getRelocateMeCompanyController = new GetRelocateMeCompanyController()
const getSiaExplainsCompanyController = new GetSiaExplainsCompanyController()
const createCompanyJobDataController = new CreateCompanyJobDataController()

companyRouter.post('/relocateMe', getRelocateMeCompanyController.handle)
companyRouter.post('/siaExplains', getSiaExplainsCompanyController.handle)
companyRouter.post('/:name/scrapp', createCompanyJobDataController.handle)

export { companyRouter }
