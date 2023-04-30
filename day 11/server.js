const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
  
});
response.write('Hello, World!');
res.end()
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
