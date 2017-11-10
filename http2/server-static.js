const http2 = require('http2');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const {
    HTTP2_HEADER_PATH,
    HTTP2_HEADER_METHOD,
    HTTP_STATUS_NOT_FOUND,
    HTTP_STATUS_INTERNAL_SERVER_ERROR
} = http2.constants;

const options = {
    key: fs.readFileSync('./localhost-privkey.pem'),
    cert: fs.readFileSync('./localhost-cert.pem')
}

const server = http2.createSecureServer(options);

const serverRoot = "./public";

function respondToStreamError(err, stream) {
    console.log(err);
    if (err.code === 'ENOENT') {
        stream.respond({ ":status": HTTP_STATUS_NOT_FOUND });
    } else {
        stream.respond({ ":status": HTTP_STATUS_INTERNAL_SERVER_ERROR });
    }
    stream.end();
}

//server.on('error', (err) => console.error(err));
//server.on('socketError', (err) => console.error(err));

server.on('stream', (stream, headers) => {
    const reqPath = headers[HTTP2_HEADER_PATH];
    console.log(reqPath);
    const reqMethod = headers[HTTP2_HEADER_METHOD];

    const fullPath = path.join(serverRoot, reqPath);
    const responseMimeType = mime.lookup(fullPath);

    stream.respondWithFile(fullPath, {
        'content-type': responseMimeType
    }, {
        onError: (err) => respondToStreamError(err, stream)
    });

});

server.listen(8443);