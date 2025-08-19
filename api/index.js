const jsonServer = require('json-server')
const path = require('path')

const app = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, '..', 'db', 'db.json'))
const defaults = jsonServer.defaults({ logger: false })

app.use(jsonServer.bodyParser)
app.use(defaults)
app.use(router)

module.exports = (req, res) => app(req, res)
module.exports.config = { runtime: 'nodejs' }
