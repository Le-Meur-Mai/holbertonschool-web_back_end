const http = require('http');

const app = http.createServer((req, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

const hostname = '127.0.0.1';
const port = 1245;

app.listen(port, hostname);

module.exports = app;
