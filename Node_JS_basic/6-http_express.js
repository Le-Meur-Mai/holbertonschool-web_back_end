const express = require('express');

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.set('Content-Type', 'text/html');
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`${port} started`);
});

module.exports = app;
