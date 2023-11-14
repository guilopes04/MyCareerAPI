import { ObjectId } from 'mongodb'

export type MyCredentialsType = {
  title: string
  password: string
  site: string
  createdAt?: string
  updatedAt?: string
  _id?: ObjectId
}
