import { Request, Response } from 'express'
import { CreateCompanyJobDataUseCase } from './CreateCompanyJobDataUseCase.useCase.ts'
import { container } from 'tsyringe'

export class CreateCompanyJobDataController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.params
    const getCompanyUseCase = container.resolve(CreateCompanyJobDataUseCase)

    try {
      await getCompanyUseCase.execute(name)

      return res
        .status(201)
        .json({ message: `${name} infos was saved successfully!` })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
