import Koa from 'koa'
import Router from 'koa-router'
import { generateListingMiddleware } from '../lib/'
import { generatePets } from '../utils'

const pets = generatePets(50)

const app = new Koa()
const testRouter = new Router({ prefix: '/api/pets' })

const listingHandler = () => {
  return pets
}

const listingMiddleware = generateListingMiddleware(listingHandler)

testRouter.get('/', listingMiddleware)

app.use(testRouter.routes(), testRouter.allowedMethods())

export default app

