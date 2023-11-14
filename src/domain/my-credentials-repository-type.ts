import { MyCredentialsType } from './my-credentials-type'

export type MyCredentialsRepositoryType = {
  get: () => Promise<MyCredentialsType[]>
  post: (credential: MyCredentialsType) => Promise<void>
  put: () => Promise<void>
  delete: () => Promise<void>
}
