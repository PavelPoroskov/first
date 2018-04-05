
// var get = require('lodash.get')
var lodash = require('lodash')
var get = lodash.get
var isEqual = lodash.isEqual

const test = (o1, o2) => {
  console.log()
  console.log(o1)
  console.log(o2)
  if (get(o1, 'a.b.c') === get(o2, 'a.b.c')) {
    console.log('get(o1, "a.b.c") === get(o2, "a.b.c")')
  } else {
    console.log('NOT get(o1, "a.b.c") === get(o2, "a.b.c")')
  }
}

const testEq = (o1, o2) => {
  console.log()
  console.log(o1)
  console.log(o2)
  if (isEqual(get(o1, 'a.c'), get(o2, 'a.c'))) {
    console.log('isEqual(get(o1, "a.c"), get(o2, "a.c"))')
  } else {
    console.log('NOT isEqual(get(o1, "a.c"), get(o2, "a.c"))')
  }
}

test({}, {}) // yes
test({a: 1}, {}) // yes
test({a: {}}, {}) // yes
test({a: {b: 1}}, {}) // yes
test({a: {b: {}}}, {}) // yes
test({a: {b: {c: 3}}}, {}) // no
test({a: {b: {c: {}}}}, {}) // no
test({a: {b: {c: {d: 4}}}}, {}) // no

testEq({}, {})
testEq({a: 1}, {})
testEq({a: {}}, {})
testEq({a: {b: 1}}, {})
testEq({a: {b: {}}}, {})
testEq({a: {c: 3}}, {})
testEq({a: {c: {}}}, {})
testEq({a: {c: {d: 4}}}, {})

testEq({a: {c: 3}}, {a: {c: 4}})
testEq({a: {c: 3}}, {a: {c: 3}})
testEq({a: {c: {}}}, {a: {c: {}}})
testEq({a: {c: {}}}, {a: {c: []}})
testEq({a: {c: {d: 4}}}, {a: {c: {d: 4}}})
testEq({a: {c: {d: 4}}}, {a: {b: {d: 5}}})
