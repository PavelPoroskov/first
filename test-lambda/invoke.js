var dockerLambda = require('docker-lambda')

// Spawns synchronously, uses current dir – will throw if it fails
var lambdaCallbackResult = dockerLambda({
  event: {some: 'event'},
  dockerImage: 'lambci/lambda:nodejs12.x',
  // handler: 'index.handler',
  // handler: 'index.handler_reject',

  // handler: 'index.handler_reject_obj',
  // {"errorType":"object","errorMessage":"[object Object]"}

  // handler: 'index.handler_throwobj',
  // Error: 
  // {"errorType":"object","errorMessage":"[object Object]"}

  // handler: 'index.handler_throw_validation',
  // Error: 
  // {"errorType":"ValidationError","errorMessage":"\"companyId\" must be a number"}
  
  handler: 'index.handler_throw',
})

console.log('invoke result');
console.log(lambdaCallbackResult);

// // Manually specify directory and custom args
// lambdaCallbackResult = dockerLambda({taskDir: __dirname, dockerArgs: ['-m', '1.5G'], dockerImage: 'lambci/lambda:nodejs12.x'})