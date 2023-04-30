const http = require('http');



const req = http.get('locahost', (res) => {
  console.log(`statusCode: is working??? `);

  res.on('data', (d) => {
    console.log(`Received data ${d}`)
  });
});

req.on('error', (error) => {
    console.error(`Error occurred: ${error}`);
});

req.end();