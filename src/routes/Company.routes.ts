import { Router } from "express"
import { GetRelocateMeCompanyController } from "../modules/companies/useCases/getCompanies/GetRelocateMeCompanyController.controller"
import { GetSiaExplainsCompanyController } from "../modules/companies/useCases/getCompanies/GetSiaExplainsCompanyController.controller"

const companyRouter = Router()

const getRelocateMeCompanyController = new GetRelocateMeCompanyController()
const getSiaExplainsCompanyController = new GetSiaExplainsCompanyController()

companyRouter.post("/relocateMe", getRelocateMeCompanyController.handle)
companyRouter.post("/siaExplains", getSiaExplainsCompanyController.handle)

export { companyRouter }