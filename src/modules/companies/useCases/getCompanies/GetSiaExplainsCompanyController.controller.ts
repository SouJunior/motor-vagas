import { Request, Response } from "express";
import { GetSiaExplainsCompanyUseCase } from "./GetSiaExplainsCompanyUseCase.useCase";
import { container } from "tsyringe";

export class GetSiaExplainsCompanyController {
    async handle(req: Request, res: Response): Promise<Response> {

        const getSiaExplainsCompanyUseCase = container.resolve(GetSiaExplainsCompanyUseCase)

        await getSiaExplainsCompanyUseCase.execute()

        return res.status(201).json({ message: "SiaExplains companies info saved successfully"});
    }
}