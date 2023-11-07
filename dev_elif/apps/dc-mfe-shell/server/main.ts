/*
 * This is only a minimal custom server to get started.
 * You may want to consider using Express or another server framework, and enable security features such as CORS.
 *
 * For more examples, see the Next.js repo:
 * - Express: https://github.com/vercel/next.js/tree/canary/examples/custom-server-express
 * - Hapi: https://github.com/vercel/next.js/tree/canary/examples/custom-server-hapi
 */
import { createServer } from 'http';
import { parse } from 'node:url';
import * as path from 'path';
import { revalidate } from '@module-federation/nextjs-mf/utils';
import next from 'next';

const chokidar = require('chokidar');

// Next.js server options:
// - The environment variable is set by `@nx/next:server` when running the dev server.
// - The fallback `__dirname` is for production builds.
// - Feel free to change this to suit your needs.
const dir = process.env.NX_NEXT_DIR || path.join(__dirname, '..');
const dev = process.env.NODE_ENV === 'development';

// HTTP Server options:
// - Feel free to change this to suit your needs.
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT ? parseInt(process.env.PORT) : 4200;

async function main() {
  let server:any = null;
  if (server) {
    server.close(() => {
      console.log("HTTP server closed.", port);

      // When server has stopped accepting connections
      // exit the process with exit status 0
      process.exit(0);
  });
  }
  const nextApp = next({ dev, dir });
  const handle = nextApp.getRequestHandler();

  const paths = [
    './apps/**/.next/static/ssr/remoteEntry.js',
    './apps/**/.next/static/chunks/remoteEntry.js',
    './apps/**/_next/static/ssr/remoteEntry.js',
    './apps/**/_next/static/chunks/remoteEntry.js'
  ];

  const watcher = chokidar.watch(paths, {
    ignored:"./apps/dc-mfe-shell",
    persistent: true
  });

  await nextApp.prepare().then(() => {
    watcher.on('change', (path) => {
      revalidate().then((shouldReload) => {
        if (shouldReload) {
          /* @ts-ignore */
          nextApp.server.hotReloader.send('reloadPage');
        }
      });
    });
  });

  server = createServer((req, res) => {
    const parsedUrl = parse(req.url ?? '', true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, hostname);

  console.log(`[ ready ] on http://${hostname}:${port}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

