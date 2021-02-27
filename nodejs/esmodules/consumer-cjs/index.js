const { hello } = require('hello-cjs');
// not work
// const { hello: helloES6 } = require('hello-es6');

// not work
// const { helloES6 } = require('./proxy.mjs');

hello();

// helloES6();