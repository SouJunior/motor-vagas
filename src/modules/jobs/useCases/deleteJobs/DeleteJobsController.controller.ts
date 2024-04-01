import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteJobsUseCase } from "./DeleteJobsUseCase.useCase";

export class DeleteJobsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const deleteJobsUseCase = container.resolve(DeleteJobsUseCase)

        const {status, message} = await deleteJobsUseCase.execute()

        return res.status(status).json({message});
    }
}