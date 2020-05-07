
const WAIT_MS = 200;

const wait = ms => new Promise( fnResolve => setTimeout(fnResolve, ms) );

const waitWithLog = async (message, ms = 200) => {
  await wait(ms);
  console.log(`Async ${message}, after ${ms} ms`);
  return message;
}

const ATTEMPTS = 4;

const generatePromisesSequence = (arr, input) => arr.reduce(
  (promiseChain, currentFunction) => promiseChain.then(currentFunction),
  Promise.resolve(input),
);

const returnFirstSuccess = arrFunctions => arrFunctions.reduce(
  (promiseChain, currentFunction, index) => promiseChain.catch((err) => {
    console.log(`attempt ${index + 1}`);
    return currentFunction();
  }),
  Promise.reject(),
);

const arrAllReject = [
  () => Promise.reject(-1),
  () => Promise.reject(-2),
  () => Promise.reject(-3),
  () => Promise.reject(-4),
];

const arrAllSuccess = [
  () => 1,
  () => 2,
  () => 3,
  () => 4,
];

const arrLastSuccess = [
  () => Promise.reject(-1),
  () => Promise.reject(-2),
  () => Promise.reject(-3),
  () => 4,
];

const arrThirdSuccess = [
  () => Promise.reject(-1),
  () => Promise.reject(-2),
  () => 3,
  () => Promise.reject(-4),
];

const testReturnFirstSuccess = async (arr, message ) => {
  try {
    const result = await returnFirstSuccess(arr)
    console.log(`testReturnFirstSuccess (SUCCESS): ${message}, result ${result}`);  
    return result;
  } catch (err) {
    console.log(`testReturnFirstSuccess (FAILED): ${message}, error ${err}`);  
  }
}

const tryNTimes = (mainFunction, attempts) => {
  return returnFirstSuccess(
    new Array(attempts).fill(mainFunction),
  );
};

const testTryNTimes = async (fn, attempts) => {
  try {
    const result = await tryNTimes(fn, attempts)
    console.log(`testTryNTimes (SUCCESS): result ${result}`);  
    return result;
  } catch (err) {
    console.log(`testTryNTimes (FAILED): error ${err}`);  
  }
}

const allTests = async () => {

  // const firstFn = () => {
  //   console.log('first fn');
  //   return Promise.reject(-1);
  // }

  // // const result = await firstFn()
  // const result = await Promise.reject(-1)
  // .catch(err => {
  //   console.log('second fn');
  //   return Promise.reject(-2);
  // })
  // .catch(err => {
  //   console.log('third fn');
  //   return Promise.resolve(3);
  // });

  // console.log(result);


  // await testReturnFirstSuccess( arrAllReject, 'arrAllReject'); // must be error
  // await testReturnFirstSuccess( arrAllSuccess, 'arrAllSuccess'); // must be first
  // await testReturnFirstSuccess( arrThirdSuccess, 'arrThirdSuccess'); // must be third
  // await testReturnFirstSuccess( arrLastSuccess, 'arrLastSuccess'); // must be last

  await testTryNTimes(() => Promise.reject(-1), 3);
  await testTryNTimes(() => 1, 3);
}

allTests();