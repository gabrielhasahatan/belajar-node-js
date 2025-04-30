// server.js
const http = require('http');
//contoh ES MODULE
import { createServer } from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello dari server Node.js!');
});

server.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});
