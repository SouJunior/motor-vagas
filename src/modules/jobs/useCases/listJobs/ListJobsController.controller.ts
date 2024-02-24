import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListJobsUseCase } from "./ListJobsUseCase.useCase";

export class ListJobsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const listJobsUseCase = container.resolve(ListJobsUseCase)

        const {status, message, data} = await listJobsUseCase.execute()

        return res.status(status).json({data, message});
    }
}