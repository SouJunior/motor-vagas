import { Router } from "express"
import { jobRouter } from "./Job.routes"
import { companyRouter } from "./Company.routes"
import { docsRouter } from "./Docs.routes"

const router = Router()

router.use("/", docsRouter)
router.use("/job", jobRouter)
router.use("/company", companyRouter)

export { router }