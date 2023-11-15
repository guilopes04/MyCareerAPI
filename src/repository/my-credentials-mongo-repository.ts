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
    //validar parametros
    let collection = this.db.collection(this.collectionName)
    await collection.insertOne(credential)
  }

  async put(credential: MyCredentialsType): Promise<void> {
    console.log('credential:', credential)
    await this.init()
    const collection = this.db.collection(this.collectionName)
    try {
      await collection.updateOne({ _id: credential._id }, { $set: credential })
    } catch (error) {
      // Tratar o erro aqui
      console.error('Erro ao atualizar o documento:', error)
      throw error
    }
  }

  async delete(_id: ObjectId): Promise<void> {
    console.log('_id:', _id)
    await this.init()
    const collection = this.db.collection(this.collectionName)
    const response = await collection.deleteOne({ _id })
    console.log('response:', response)
  }

  async get(id?: ObjectId): Promise<any> {
    await this.init()
    const collection = this.db.collection(this.collectionName)

    let myCredentials
    if (id) myCredentials = await collection.findOne()
    myCredentials = await collection.find().toArray()
    return myCredentials
  }
}
