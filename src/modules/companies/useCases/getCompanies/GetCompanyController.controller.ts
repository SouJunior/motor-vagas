import { Request, Response } from 'express'
import { GetCompanyUseCase } from './GetCompanyUseCase.useCase'
import { container } from 'tsyringe'

export class GetCompanyController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.params
    const getCompanyUseCase = container.resolve(GetCompanyUseCase)

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
