// api/index.js
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust path to your db.json
const router = jsonServer.router(path.join(__dirname, '../db/db.json'));

server.use(middlewares);
server.use(router);

export default function handler(req, res) {
  server(req, res);
}
