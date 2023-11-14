import { Db } from 'mongodb'
import { MyCredentialsType } from '../domain/my-credentials-type'
import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'
import { repositoryHelper } from './repository-helper'
import myCredentialsMock from '../../routes/mocks/my-credentials-mock'

export class MyCredentialsMongoRepository
  implements MyCredentialsRepositoryType
{
  db: Db
  collectionName: string = 'myCredentials'

  constructor() {}

  async init() {
    this.db = await repositoryHelper.getClient()
  }

  async post(credential: MyCredentialsType): Promise<void> {
    const collection = this.db.collection(this.collectionName)
    await collection.insertOne(credential)
  }

  put: () => Promise<void>
  delete: () => Promise<void>

  async get(): Promise<any> {
    await this.init()
    const collection = this.db.collection(this.collectionName)
    const myCredentials = await collection.find().toArray()
    return myCredentials
  }
}
