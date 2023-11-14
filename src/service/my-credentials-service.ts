import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'
import { MyCredentialsType } from '../domain/my-credentials-type'
import { ParamsType } from '../domain/params-type'
import generator from 'generate-password'

export class MyCredentialsService {
  repository: MyCredentialsRepositoryType
  constructor(repository: MyCredentialsRepositoryType) {
    this.repository = repository
  }

  async handle(params: ParamsType) {
    console.log(params)
    const handleMethod = this[params.body.method || 'getMyCredentials']
    if (handleMethod) {
      return await handleMethod.bind(this)(params)
    } else {
      throw new Error(`Método '${params.body.method}' não encontrado`)
    }
  }

  async getMyCredentials(params: ParamsType): Promise<any> {
    const myCredentials = await this.repository.get()
    console.log('• myCredentials: ', JSON.stringify(myCredentials))
    return { myCredentials }
  }

  async postCredential(params: ParamsType): Promise<void> {
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

  async generatePassword(params: ParamsType): Promise<any> {
    const {
      length = 10,
      numbers = true,
      symbols = false,
      uppercase = true,
      lowercase = true
    } = params.body

    const password = generator.generate({
      length,
      numbers,
      symbols,
      uppercase,
      lowercase
    })

    return { password }
  }

  async putCredential(params: ParamsType): Promise<void> {
    const { _id, title, password, site } = params.body

    const credential: MyCredentialsType = {
      _id,
      title,
      password,
      site,
      updatedAt: new Date().toISOString()
    }

    await this.repository.put(credential)
  }

  async deleteCredential(params: ParamsType): Promise<void> {
    const { _id } = params.body

    await this.repository.delete(_id)
  }
}
