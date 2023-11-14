import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'
import { MyCredentialsType } from '../domain/my-credentials-type'
import { ParamsType } from '../domain/params-type'

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
}
