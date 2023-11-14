import { ObjectId } from 'mongodb'
import { MyCredentialsType } from './my-credentials-type'

export type MyCredentialsRepositoryType = {
  get: (id?: ObjectId) => Promise<MyCredentialsType[]>
  post: (credential: MyCredentialsType) => Promise<void>
  put: (credential: MyCredentialsType) => Promise<void>
  delete: (id: ObjectId) => Promise<void>
}
