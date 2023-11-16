import { ObjectId } from 'mongodb'
import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'
import {
  MyCredentialsResponseType,
  MyCredentialsType
} from '../domain/my-credentials-type'
import { ParamsType } from '../domain/params-type'
import generator from 'generate-password'
import {
  CustomError,
  MissingParamError,
  NotFoundError
} from '../controller/http-response'
import { GeneratePasswordResponseType } from '../domain/generate-password-response-type'
import { MyCredentialsServiceType } from '../domain/my-credential-service-type'

export class MyCredentialsService implements MyCredentialsServiceType {
  repository: MyCredentialsRepositoryType
  constructor(repository: MyCredentialsRepositoryType) {
    this.repository = repository
  }

  async handle(params: ParamsType): Promise<any> {
    const handleMethod = this[params.body.method || 'getMyCredentials']
    if (handleMethod) {
      return await handleMethod.bind(this)(params)
    } else {
      throw new Error(`Método '${params.body.method}' não encontrado`)
    }
  }

  async getMyCredentials(
    params: ParamsType
  ): Promise<MyCredentialsResponseType> {
    const _id = params.queryParams?._id
      ? new ObjectId(params.queryParams?._id)
      : null
    const myCredentials = (await this.repository.get(_id)) ?? []
    return { myCredentials }
  }

  async postCredential(params: ParamsType): Promise<void> {
    this.verifyParams(['title', 'password', 'site'], params.body)
    const { title, password, site } = params.body

    const credential: MyCredentialsType = {
      title,
      password,
      site,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    await this.repository.post(credential)
  }

  async generatePassword(
    params: ParamsType
  ): Promise<GeneratePasswordResponseType> {
    const {
      length = 10,
      numbers = true,
      symbols = true,
      uppercase = true,
      lowercase = true
    } = params.body

    const password = generator.generate({
      length,
      numbers,
      symbols,
      uppercase,
      lowercase,
      strict: true
    })

    return { password }
  }

  async putCredential(params: ParamsType): Promise<void> {
    this.verifyParams(['_id'], params.body)
    const { _id, title, password, site } = params.body

    const credential: MyCredentialsType = {
      _id: new ObjectId(_id),
      title,
      password,
      site,
      updatedAt: new Date().toISOString()
    }

    await this.repository.put(credential)
  }

  async deleteCredential(params: ParamsType): Promise<void> {
    this.verifyParams(['_id'], params.body)
    const { _id } = params.body

    if (!_id) throw new NotFoundError()

    await this.repository.delete(new ObjectId(_id))
  }

  verifyParams(requiredParams: string[], event: any): void | CustomError {
    requiredParams.forEach((param) => {
      if (!event[param] && event[param] === undefined)
        throw new MissingParamError(param)
    })
  }
}
