import 'babel-polyfill'
import app from './test-server'
import { firstOf } from '../utils/'

const serverStarted = err => console.log(`server listening to port ${ HTTP_PORT }`)
const HTTP_PORT = firstOf(process.env.HTTP_PORT, 32123)

app.listen(HTTP_PORT, serverStarted)

export default app

