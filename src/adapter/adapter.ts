import { Controller } from '../domain/controller'
import { Request } from 'express'
import { ParamsType } from '../domain/params-type'

export const adapterEvent = async (controller: Controller, req: Request) => {
  const params: ParamsType = {
    queryParams: req.query || {},
    path: req.params || {},
    body: req.body || {}
  }

  console.log(`Starting event with: ${JSON.stringify(params)}`)

  return await controller.handle(params)
}
