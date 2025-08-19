import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../db/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export the handler properly for Vercel
export default async function handler(req, res) {
  const serverInstance = createServer((request, response) => {
    server(request, response);
  });

  serverInstance.listen(0, () => {
    const address = serverInstance.address();
    const port = typeof address === 'object' && address?.port ? address.port : 3000;
    const options = {
      hostname: '127.0.0.1',
      port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    };

    const proxy = http.request(options, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    });

    req.pipe(proxy, { end: true });
  });
}
