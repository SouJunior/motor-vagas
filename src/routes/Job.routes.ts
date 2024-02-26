import { Router } from "express"
import { GetJobController } from "../modules/jobs/useCases/getJobs/GetJobController.controller"
import { ListJobsController } from "../modules/jobs/useCases/listJobs/ListJobsController.controller"

const jobRouter = Router()

const getJobController = new GetJobController()
const listJobsController = new ListJobsController()

jobRouter.get("/", listJobsController.handle)
jobRouter.post("/", getJobController.handle)

export { jobRouter }