const http = require('http');

require('dotenv').config();
// {path: path/filename}

//process.env.PORT
let port = process.env.PORT;
let host = process.env.HOST;

let server = http.createServer((req, resp) => {
  console.log('thanks for your request');
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  resp.end('You Rock');
});

server.listen(port, host, () => {
  console.log(`Server is listening ${host} : ${port}`);
});
