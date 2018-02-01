# generic-middleware-utils
Utility functions to generate middleware functions for http-interfaces. Reduces the amount of work in creating [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)-style interfaces.

## Example

```javascript
import Koa from 'koa'
import MyModel from './MyModel'
import createInterface from './lib/'

const HTTP_PORT = process.env.HTTP_PORT || 32123
const app = new Koa()
const myModelRouter = createInterface('/my-model', MyModel)

app.use(myModelRouter.routes(), myModelRouter.allowedMethods())

app.listen(HTTP_PORT)
```

## API

### createInterface(routerOrPath, pathOrModel, ModelOrUndefined)
Creates endpoints for router.

