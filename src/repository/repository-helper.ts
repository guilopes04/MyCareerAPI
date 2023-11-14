import { MongoClient, Db } from 'mongodb'

export const repositoryHelper = {
  db: null as Db,
  client: null as MongoClient,

  async connect(): Promise<void> {
    const url = 'mongodb://localhost:27017'
    const dbName = 'mydatabase'

    this.client = await new MongoClient(url).connect()

    this.db = this.client.db(dbName)
  },

  getClient(): Db {
    if (!this.db) {
      this.connect()
    }
    return this.db
  }
}
