const os = require('os');
const http = require('http');

const requestHandler = (req, res) => {
  console.log('Request incoming from ' + req.connection.remoteAddress);
  res.writeHead(200);
  res.end('Success! You\'ve hit ' + os.hostname() + ' on ' + os.platform() + '!');
};

const server = http.createServer(requestHandler)

server.listen(3000);

console.log(`Server is running on http://localhost:3000`)