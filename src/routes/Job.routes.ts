import { Router } from "express"
import { GetJobController } from "../modules/jobs/useCases/getJobs/GetJobController.controller"
import { ListJobsController } from "../modules/jobs/useCases/listJobs/ListJobsController.controller"
import { DeleteJobsController } from "../modules/jobs/useCases/deleteJobs/DeleteJobsController.controller"

const jobRouter = Router()

const getJobController = new GetJobController()
const listJobsController = new ListJobsController()
const deleteJobsController = new DeleteJobsController()

jobRouter.get("/", listJobsController.handle)
jobRouter.post("/", getJobController.handle)
jobRouter.delete("/", deleteJobsController.handle)

export { jobRouter }