// docker run --rm -v "$PWD":/var/task:ro,delegated lambci/lambda:nodejs12.x index.handler
const CustomError = require('customError');

const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  pages: Joi.array().items(Joi.string()).required(),  
  bucket: Joi.string().required(),
  companyId: Joi.number().min(1).required(),
  id: Joi.number().min(1).required(),
});


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

exports.handler_throw =  async function(event, context) {
//   throw {
//     type: 'some-error',
//     message: 'Run',
//   };
// // {"errorType":"object","errorMessage":"[object Object]"}

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

  function UserException(message) {
    this.message = message;
    this.name = 'UserException';
    // !!! need this method
    this.toString = () => `name ${this.name}, message ${this.message}`;
  }
  throw new UserException('from user exception');
  // {"errorType":"object","errorMessage":"name UserException, message from user exception"}

  //   throw new Error('some-error');
// // {"errorType":"Error","errorMessage":"some-error"}

  // throw new CustomError('from custom err');
  // // {"errorType":"CustomError","errorMessage":"from custom err"}
}

exports.handler_stringify =  async function(event, context) {
  throw JSON.stringify({
    type: 'some-error',
    message: 'Run',
  });
}
// {"errorType":"string","errorMessage":"{\"type\":\"some-error\",\"message\":\"Run\"}"}

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
    pages: ['a','b', 11, 'd'],
  });

  if (validationResult.error) {
    throw validationResult.error;
  }
};
// {"errorType":"ValidationError","errorMessage":"\"companyId\" must be a number"}