import Router from 'koa-router'
import { generateListingMiddleware } from './generateListingMiddleware'
import { generateCreateMiddleware } from './generateCreateMiddleware'
import { generateUpdateMiddleware } from './generateUpdateMiddleware'
import { generateRemoveMiddleware } from './generateRemoveMiddleware'

/**
 * Create http interface and attach it to the router
 * @param { Object|string } routerOrPath - Router or path
 * @param { string|Object } pathOrModel - Path or model
 * @param { Object } [ModelOrUndefined] - Model
 */
export default function createInterface (routerOrPath, pathOrModel, ModelOrUndefined) {
  const path = typeof pathOrModel === 'string' ? pathOrModel : routerOrPath
  if (typeof path !== 'string') throw new Error('`path` must be a string')
  
  const router = routerOrPath instanceof Object ? routerOrPath : new Router(path)
  if (!(router instanceof Object)) throw new Error('`router` is not an object instance')

  const Model = typeof pathOrModel === 'string' ? ModelOrUndefined : pathOrModel
  if (!(Model instanceof Object)) throw new Error('`Model` is not an object instance')

  // TODO: later add functionality for customization
  router.get(path, generateListingMiddleware(Model))
  router.post(path, generatePostMiddleware(Model))
  router.put(`${ path }/:id`, generatePutMiddleware(Model))
  router.delete(`${ path }/:id`, generateDeleteMiddleware(Model))

  return router
}

