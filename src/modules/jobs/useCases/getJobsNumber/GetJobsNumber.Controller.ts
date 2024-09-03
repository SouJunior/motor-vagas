import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetJobsNumberUseCase } from './GetJobsNumberUseCase'

export class GetJobsNumberController {
  async handle(req: Request, res: Response): Promise<Response> {
    const JobsNumber = container.resolve(GetJobsNumberUseCase)

    const resultNumber = await JobsNumber.execute()

    return res.status(200).json({ resultNumber })
  }
}
