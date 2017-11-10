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

server.on('stream', (stream, headers) => {
    const reqPath = headers[HTTP2_HEADER_PATH];
    console.log(reqPath);
    const reqMethod = headers[HTTP2_HEADER_METHOD];

    const fullPath = path.join(serverRoot, reqPath);
    const responseMimeType = mime.lookup(fullPath);

    if (fullPath.endsWith(".html")) {
        console.log('html');
        // handle HTML file
        stream.respondWithFile(fullPath, {
            "content-type": "text/html"
        }, {
            onError: (err) => {
                respondToStreamError(err, stream);
            }
        });

        stream.pushStream({ ":path": "/css/font/RoadNumbers2.0.ttf" }, { parent: stream.id }, (pushStream) => {
            console.log('pushing');
            pushStream.respondWithFile(path.join(serverRoot, "/css/font/RoadNumbers2.0.ttf"), {
                'content-type': "text/css"
            }, {
                onError: (err) => {
                    respondToStreamError(err, pushStream);
                }
            });
        });

    } else {
        // handle static file
        console.log(fullPath);
        stream.respondWithFile(fullPath, {
            'content-type': responseMimeType
        }, {
            onError: (err) => respondToStreamError(err, stream)
        });
    }

});

server.listen(8443);