import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteJobsUseCase } from "./DeleteJobsUseCase.useCase";

export class DeleteJobsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const jobIds = req.params.id;
        const deleteJobsUseCase = container.resolve(DeleteJobsUseCase)
        const result = await deleteJobsUseCase.execute(jobIds);

        return res.status(result.status).json({message: result.message});
    }
}