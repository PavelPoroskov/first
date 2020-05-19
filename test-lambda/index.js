// docker run --rm -v "$PWD":/var/task:ro,delegated lambci/lambda:nodejs12.x index.handler

const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  bucket: Joi.string().required(),
  companyId: Joi.number().min(1).required(),
  id: Joi.number().min(1).required(),
});

class CustomError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError'
    // Custom debugging information
    // this.foo = foo
    // this.date = new Date()
  }
}

exports.handler =  async function(event, context) {
  const sum = 1 + 3;
  return {
    ar: [1, 2, 3],
    type: 'result',
  };
}
// {"ar":[1,2,3],"type":"result"}

exports.handler_noreturn =  async function(event, context) {
  const sum = 1 + 3;
}
// null

exports.handler_throwobj =  async function(event, context) {
  throw {
    type: 'some-error',
    message: 'Run',
  };
}
// {"errorType":"object","errorMessage":"[object Object]"}

exports.handler_throw =  async function(event, context) {
  // throw {
  //   errorType: 'throw_typed',
  //   errorMessage: 'throw_typed: errorMessage',
  // };
// // {"errorType":"object","errorMessage":"[object Object]"}

  // throw {
  //   name: 'throw_typed',
  //   message: 'throw_typed: errorMessage',
  // };
// // {"errorType":"object","errorMessage":"[object Object]"}

  // function UserException(message) {
  //   this.message = message;
  //   this.name = 'UserException';
  // }
  // throw new UserException('from user exception');
  // // {"errorType":"object","errorMessage":"[object Object]"}

  throw new CustomError('from custom err');
}

exports.handler_stringify =  async function(event, context) {
  throw JSON.stringify({
    type: 'some-error',
    message: 'Run',
  });
}
// {"errorType":"string","errorMessage":"{\"type\":\"some-error\",\"message\":\"Run\"}"}

exports.handler_throwerr =  async function(event, context) {
  throw new Error('some-error');
}
// {"errorType":"Error","errorMessage":"some-error"}

exports.handler_ref = async function() {
  return x + 10
}
// {"errorType":"ReferenceError","errorMessage":"x is not defined"}

const wait = ms => new Promise( fnResolve => setTimeout(fnResolve, ms) );

const fnReject = (msg) => new Promise((resolve, reject) => {
  reject(msg);
})

exports.handler_reject_str = async function() {
  await wait(100);
  await fnReject('from reject');
};
// {"errorType":"Runtime.UnhandledPromiseRejection","errorMessage":"from reject"}

exports.handler_reject_obj = async function() {
  await wait(100);
  await fnReject({message: 'obj from reject'});
};

exports.handler_throw_validation = async function(event) {
  const validationResult = schema.validate({
    bucket: 'aaa',
    companyId: 'bbb',
  });

  if (validationResult.error) {
    throw validationResult.error;
  }
};
// {"errorType":"ValidationError","errorMessage":"\"companyId\" must be a number"}