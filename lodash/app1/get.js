var lodash = require('lodash')
var get = lodash.get

// const action = { type: 'type0', payload: { response: [{ id: 33 }] }};
const action = { type: 'type0', payload: { response: [] }};

const { id } = get( action, 'payload.response[0]');
console.log(`id= ${id}`);