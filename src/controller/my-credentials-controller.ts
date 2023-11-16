import { Controller } from '../domain/controller'
import { ParamsType } from '../domain/params-type'
import { MyCredentialsService } from '../service/my-credentials-service'
import {
  CustomError,
  NoContentResponse,
  OKResponse,
  ServerError
} from './http-response'
import { HttpResponse } from '../domain/http'
import { MyCredentialsMongoRepository } from '../repository/my-credentials-mongo-repository'
import { MyCredentialsServiceType } from '../domain/my-credential-service-type'
import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'

export class MyCredentialsController implements Controller {
  private client: MyCredentialsRepositoryType
  private service: MyCredentialsServiceType

  constructor() {
    this.client = new MyCredentialsMongoRepository()
    this.service = new MyCredentialsService(this.client)
  }

  async handle(params: ParamsType): Promise<HttpResponse> {
    try {
      const response = await this.service.handle(params)

      console.log(`Finished Event ${params.body.method}`)
      if (response) return new OKResponse(response).toHttpResponse()

      return new NoContentResponse().toHttpResponse()
    } catch (e) {
      console.error('error:', e)

      if (e instanceof CustomError) return e.toHttpResponse()

      return new ServerError().toHttpResponse()
    }
  }
}
