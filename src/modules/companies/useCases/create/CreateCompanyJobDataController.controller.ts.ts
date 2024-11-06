import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCompanyJobDataUseCase } from "./CreateCompanyJobDataUseCase.useCase.ts";

export class CreateCompanyJobDataController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const getCompanyUseCase = container.resolve(CreateCompanyJobDataUseCase);

    try {
      await getCompanyUseCase.execute(name);

      return res
        .status(201)
        .json({ message: `${name} infos was saved successfully!` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
