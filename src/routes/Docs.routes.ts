import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";

const docsRouter = Router();

docsRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { docsRouter };
