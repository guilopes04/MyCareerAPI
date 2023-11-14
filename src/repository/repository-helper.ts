import { MongoClient, Db } from 'mongodb'

export const repositoryHelper = {
  db: null as Db,
  client: null as MongoClient,

  async connect(): Promise<void> {
    const url = 'mongodb://mongo-container:27017'

    this.client = await MongoClient.connect(url)

    this.db = await this.client.db()
  },

  async getClient(): Promise<Db> {
    if (!this.db) {
      await this.connect()
    }
    return this.db
  }
}
