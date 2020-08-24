const crypto = require('crypto');
const uniqid = require('uniqid');

const salt = '12345';

const hash = text => crypto.createHash('sha256').update(`${salt}${text}`).digest('hex');


const id = uniqid();

console.log('=== id');
console.log(id);

console.log('=== hash');
console.log(hash(id));
