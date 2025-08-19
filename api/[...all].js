// api/[...all].js
import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = jsonServer.create()
const router = jsonServer.router(path.join(process.cwd(), 'db', 'db.json'))
const defaults = jsonServer.defaults({ logger: false })

// 1) Make sure all /api/* requests become /* for json-server
const API_BASE = '/api'
app.use((req, _res, next) => {
  if (req.url === API_BASE) req.url = '/'
  else if (req.url.startsWith(API_BASE + '/')) req.url = req.url.slice(API_BASE.length)
  next()
})

app.use(jsonServer.bodyParser)
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store')
  next()
})
app.use(defaults)

// 2) Mount the json-server router at root
app.use(router)

export default function handler(req, res) {
  app(req, res)
}

export const config = { runtime: 'nodejs' }
