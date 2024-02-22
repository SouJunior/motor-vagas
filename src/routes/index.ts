import { Router } from "express"
import { jobRouter } from "./Job.routes"
import { companyRouter } from "./Company.routes"

const router = Router()

router.use("/job", jobRouter)
router.use("/company", companyRouter)

export { router }