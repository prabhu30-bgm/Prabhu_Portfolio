const http = require('http');
const fs = require('fs');
const path = require('path');

let PORT = parseInt(process.env.PORT, 10) || 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.JPG': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
};

function createServer() {
  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/') reqUrl = '/index.html';

    const filePath = path.join(__dirname, decodeURIComponent(reqUrl));
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('404 Not Found');
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('500 Internal Server Error');
        }
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache',
        });
        res.end(content);
      }
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${PORT} is busy, attempting port ${PORT + 1}...`);
      PORT += 1;
      server.listen(PORT);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(PORT, () => {
    console.log(`\n==================================================`);
    console.log(`  Portfolio Website Running:`);
    console.log(`  > Local:   http://localhost:${PORT}/`);
    console.log(`==================================================\n`);
  });
}

createServer();
