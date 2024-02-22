import { Request, Response } from "express";
import { GetRelocateMeCompanyUseCase } from "./GetRelocateMeCompanyUseCase.useCase";
import { container } from "tsyringe";

export class GetRelocateMeCompanyController {
    async handle(req: Request, res: Response): Promise<Response> {

        const getRelocateMeCompanyUseCase = container.resolve(GetRelocateMeCompanyUseCase)

        await getRelocateMeCompanyUseCase.execute()

        return res.status(201).json({ message: "Relocate.me companies info saved successfully"});
    }
}