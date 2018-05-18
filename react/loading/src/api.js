
export const findUsers = () => {

  return fetch('http://localhost:8000/api/v1/users')
  .then( response => response.json())
  .then( obj => obj.data )
  .then( obj => obj.users )
}

export const findUserById = (id) => {

  return fetch(`http://localhost:8000/api/v1/users/${id}`)
  .then( response => response.json())
  .then( obj => obj.data )
  .then( obj => obj.user )
}

export const addUser = (obj) => {

  return fetch('http://localhost:8000/api/v1/users', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(obj), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then( res => res.json())  
  .then( obj => obj.data )  
}

export const updateUser = (id, obj) => {

  return fetch(`http://localhost:8000/api/v1/users/${id}`, {
    method: 'PATCH', // or 'PUT'
    body: JSON.stringify(obj), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then( res => res.json())  
  .then( obj => obj.data )  
}

export function deepCopyObj(obj) {
  if (null === obj || "object" !== typeof obj) return obj;
  
  if (obj instanceof Date) {
    let copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  if (obj instanceof Array) {
    let copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = deepCopyObj(obj[i]);
    }
    return copy;
  }
  if (obj instanceof Object) {
    let copy = {};
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = deepCopyObj(obj[attr]);
    }
    return copy;
  }
  throw new Error("Unable to copy obj this object.");
}

export const isEqualObj = (o1, o2) => {
  // if (o1 === o2) {
  //   return true
  // } else {    
  //   if (typeof o1 === 'object' &&  typeof o2 === 'object') {

  //   } else {
  //     return false
  //   }
  // }
  if (typeof o1 === 'object' &&  typeof o2 === 'object') {

  } else {
    return (o1 === o2)
  }

  // console.log('isEqualObj')
  // console.dir(o1)
  // console.dir(o2)
  let allKeys = Object.keys(o1).reduce( (objSum, key) => {
    objSum[key] = true
    return objSum 
  }, {} )
  allKeys = Object.keys(o2).reduce( (objSum, key) => {
    objSum[key] = true
    return objSum 
  }, allKeys )

  //Object.keys(allKeys).forEach(key => {
  for (let key of Object.keys(allKeys)) {
    // console.log(key)
    if (o1[key] !== o2[key]) {
      if (typeof o1[key] === 'object' &&  typeof o2[key] === 'object') {
        // console.log('objects')
        if (!isEqualObj(o1[key], o2[key])) {
          // console.log(key)
          // console.log(o1[key])
          // console.log(o2[key])
          return false
        }
      } else {
        // console.log(key)
        // console.log(o1[key])
        // console.log(o2[key])
        return false
      }
    }
  }

  // console.log('isEqualObj return true')
  return true
}