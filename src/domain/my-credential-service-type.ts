import { GeneratePasswordResponseType } from './generate-password-response-type'
import { MyCredentialsRepositoryType } from './my-credentials-repository-type'
import { MyCredentialsResponseType } from './my-credentials-type'
import { ParamsType } from './params-type'

export type MyCredentialsServiceType = {
  repository: MyCredentialsRepositoryType
  handle(params: ParamsType): Promise<any>
  getMyCredentials(params: ParamsType): Promise<MyCredentialsResponseType>
  postCredential(params: ParamsType): Promise<void>
  generatePassword(params: ParamsType): Promise<GeneratePasswordResponseType>
  putCredential(params: ParamsType): Promise<void>
  deleteCredential(params: ParamsType): Promise<void>
  verifyParams(requiredParams: string[], event: any): void
}
