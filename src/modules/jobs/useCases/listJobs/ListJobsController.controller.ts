import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListJobsUseCase } from "./ListJobsUseCase.useCase";

export class ListJobsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listJobsUseCase = container.resolve(ListJobsUseCase);
    const params = {
      filter: req.query.filter as string,
      sort: (req.query.sort as "ASC" | "DESC") || "ASC",
    };
    const { status, message, data } = await listJobsUseCase.execute(params);
    return res.status(status).json({ data, message });
  }
}
