import { createSequelizeUpdateHandler } from './defaultHandlers'

export function generateUpdateMiddleware (Model, handlerOrOptions, optionsOrUndefined) {
  const handler = handlerOrOptions instanceof Function ? handlerOrOptions : createSequelizeHandler()
  const options = typeof optionsOrUndefined === 'object' ? optionsOrUndefined : null
  
  if (typeof handler !== 'function') {
    throw new Error('`handler` must be a function')
  }

  // TODO: add handler options, i.e., validation, filtering, limits, error handling
  return async (ctx, next) => {
    const results = await handler(ctx)

    ctx.body = results
  }
}


