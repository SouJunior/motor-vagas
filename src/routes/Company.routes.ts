import { Router } from "express";
import { CreateCompanyJobDataController } from "../modules/companies/useCases/create/CreateCompanyJobDataController.controller.ts";

const companyRouter = Router();
const createCompanyJobDataController = new CreateCompanyJobDataController();

companyRouter.post("/", createCompanyJobDataController.handle);

export { companyRouter };
