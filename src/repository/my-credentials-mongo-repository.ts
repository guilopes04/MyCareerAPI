import { Db, ObjectId } from 'mongodb'
import { MyCredentialsType } from '../domain/my-credentials-type'
import { MyCredentialsRepositoryType } from '../domain/my-credentials-repository-type'
import { repositoryHelper } from './repository-helper'

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
    await collection.insertOne(credential)
  }

  async put(credential: MyCredentialsType): Promise<void> {
    await this.init()
    const collection = this.db.collection(this.collectionName)
    await collection.updateOne({ _id: credential._id }, { $set: credential })
  }

  async delete(_id: ObjectId): Promise<void> {
    await this.init()
    const collection = this.db.collection(this.collectionName)
    await collection.deleteOne({ _id })
  }

  async get(_id?: ObjectId): Promise<any> {
    await this.init()
    const collection = this.db.collection(this.collectionName)

    let myCredentials
    if (!_id) {
      myCredentials = await collection.find().toArray()
    } else {
      myCredentials = await collection.findOne({ _id })
    }

    return myCredentials
  }
}
