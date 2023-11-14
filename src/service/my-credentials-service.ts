import myCredentialsMock from '../../routes/mocks/my-credentials-mock'
import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'
import { MyCredentialsType } from '../domain/my-credentials-type'
import { ParamsType } from '../domain/params-type'

export class MyCredentialsService {
  repository: MyCredentialsRepositoryType
  constructor(repository: MyCredentialsRepositoryType) {
    this.repository = repository
  }
  async getMyCredentials(params: ParamsType): Promise<MyCredentialsType[]> {
    //const myCredentials = await this.repository.get()
    const myCredentials = myCredentialsMock
    return myCredentials
  }

  async postCredential(params: ParamsType): Promise<MyCredentialsType[]> {
    //const myCredentials = await this.repository.get()
    const myCredentials = myCredentialsMock
    return myCredentials
  }
}
