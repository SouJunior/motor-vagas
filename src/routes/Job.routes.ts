import { Router } from "express"
import { GetJobController } from "../modules/jobs/useCases/getJobs/GetJobController.controller"

const jobRouter = Router()

const getJobController = new GetJobController()

jobRouter.post("/", getJobController.handle)

export { jobRouter }