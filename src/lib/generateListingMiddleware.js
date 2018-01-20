export function generateListingMiddleware (handler, options) {
  if (typeof handler !== 'function') {
    throw new Error('`handler` must be a function')
  }

  // TODO: add handler options, i.e., validation, filtering, limits, error handling
  return async (ctx, next) => {
    const results = await handler()

    ctx.body = results
  }
}

