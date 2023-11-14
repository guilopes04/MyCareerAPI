import { Db, MongoClient } from 'mongodb'
import { MyCredentialsType } from '../domain/my-credentials-type'
import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'
import myCredentialsMock from '../../routes/mocks/my-credentials-mock'
import { repositoryHelper } from './repository-helper'

export class MyCredentialsMongoRepository
  implements MyCredentialsRepositoryType
{
  db: Db

  constructor() {
    this.db = repositoryHelper.getClient()
  }

  async post(credential: MyCredentialsType): Promise<void> {
    const collection = this.db.collection('myCredentials')
    await collection.insertOne(credential)
  }

  put: () => Promise<void>
  delete: () => Promise<void>

  async get(): Promise<MyCredentialsType[]> {
    const collection = this.db.collection('myCredentials')
    const myCredentials = await collection.find().toArray()
    return myCredentialsMock
  }
}
