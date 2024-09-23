import { Router } from 'express'
import { GetJobController } from '../modules/jobs/useCases/getJobs/GetJobController.controller'
import { ListJobsController } from '../modules/jobs/useCases/listJobs/ListJobsController.controller'
import { DeleteJobsController } from '../modules/jobs/useCases/deleteJobs/DeleteJobsController.controller'
import { GetJobsNumberController } from '../modules/jobs/useCases/getJobsNumber/GetJobsNumber.controller'

const jobRouter = Router()

const getJobController = new GetJobController()
const listJobsController = new ListJobsController()
const deleteJobsController = new DeleteJobsController()
const getJobsNumberController = new GetJobsNumberController()

jobRouter.get('/', listJobsController.handle)
jobRouter.post('/', getJobController.handle)
jobRouter.delete('/:id', deleteJobsController.handle)
jobRouter.get('/counter', getJobsNumberController.handle)

export { jobRouter }
