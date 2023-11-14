import { Controller } from '../domain/controller'
import { ParamsType } from '../domain/params-type'
import { MyCredentialsService } from '../service/my-credentials-service'
import {
  CustomError,
  NotFoundError,
  OKResponse,
  ServerError
} from './http-response'
import { HttpResponse } from '../domain/http'
import { MyCredentialsMongoRepository } from '../repository/my-credentials-mongo-repository'

export class MyCredentialsController implements Controller {
  private client: any
  private service: any

  constructor() {
    this.client = new MyCredentialsMongoRepository()
    this.service = new MyCredentialsService(this.client)
  }

  async handle(params: ParamsType): Promise<HttpResponse> {
    try {
      const response = await this.service.handle(params)
      return new OKResponse(response).toHttpResponse()
    } catch (e) {
      console.error(e)
      if (e instanceof CustomError) e.toHttpResponse()

      return new ServerError().toHttpResponse()
    }
  }
}
