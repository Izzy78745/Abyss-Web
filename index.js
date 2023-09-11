import { createBareServer } from '@tomphttp/bare-server-node';
import http from 'http';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import nodeStatic from 'node-static';
import chalk from 'chalk';
import 'dotenv/config';


const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const bare = createBareServer('/bare/');
const serve = new nodeStatic.Server('build/');

const server = http.createServer();

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    serve.serve(req, res);
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen({
  port: port,
}, () => {
  console.log(chalk.green(`Welcome to ${chalk.green.bold('Abyss Version 5. ')}If you encounter an error, report it to our staff.`))
  console.log(chalk.green.bold("[ABYSS] ") + "live at port " + chalk.bold.green(port));
});