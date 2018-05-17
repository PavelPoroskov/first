
export const findUsers = () => {

  return fetch('http://localhost:8000/api/v1/users')
  .then((response) => response.json())
  .then( obj => obj.data )
  .then( obj => obj.users )
}