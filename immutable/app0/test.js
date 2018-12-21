
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = Map({ a: 1, b: 2, c: 3 });

const v1 = map1.equals(map2); // true
console.log('map1.equals(map2)')
console.log(v1)

const v2 = map1 === map2; // false
console.log('map1 === map2')
console.log(v2)
