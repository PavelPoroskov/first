var lodash = require('lodash')
var get = lodash.get

// got error
// const action = { type: 'type0', payload: { response: [] }};
// const { id } = get( action, 'payload.response[0]');

// let action = { 1: 11, 2: 22, 3: 33 };
// let key = 3;
// const id = get( action, key);

// let action = { 1: 11, 2: 22, 3: 33 };
// let key;
// const id = get( action, key);

let action;
let key = 1;
const id = get( action, key);

console.log(`id= ${id}`);