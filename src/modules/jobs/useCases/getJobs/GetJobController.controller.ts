import { Request, Response } from "express";
import { GetJobUseCase } from "./GetJobUseCase.useCase";
import { container } from "tsyringe";

export class GetJobController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {locations, keyword, description} = req.body;

        const getJobUseCase = container.resolve(GetJobUseCase);

        try {
            const result = await getJobUseCase.execute(locations, keyword, description);

            if (result && typeof result.status === 'number' && typeof result.message === 'string') {
                return res.status(result.status).json({ message: result.message });
            } else {

                return res.status(500).json({ message: "An unexpected error occurred" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
