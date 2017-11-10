const http2 = require('http2');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./localhost-privkey.pem'),
    cert: fs.readFileSync('./localhost-cert.pem'),
    allowHTTP1: true
}

const server = http2.createSecureServer(options, (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('ok');
});

server.listen(8443);