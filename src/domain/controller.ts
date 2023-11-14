import { HttpResponse } from './http'
import { ParamsType } from './params-type'

export type Controller = {
  handle(params: ParamsType): Promise<HttpResponse>
}
