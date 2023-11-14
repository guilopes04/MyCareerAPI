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
    await this.init()
    let collection = this.db.collection(this.collectionName)
    //if (!collection) this.db.createCollection(this.collectionName)

    await collection.insertOne(credential)
  }

  async put(credential: MyCredentialsType): Promise<void> {
    await this.init()
    const collection = this.db.collection(this.collectionName)
    await collection.updateOne({ _id: credential._id }, { $set: credential })
  }

  async delete(id: string): Promise<void> {
    await this.init()
    const collection = this.db.collection(this.collectionName)
    await collection.deleteOne({ _id: id })
  }

  async get(): Promise<any> {
    await this.init()
    const collection = this.db.collection(this.collectionName)
    const myCredentials = await collection.find().toArray()
    return myCredentials
  }
}
