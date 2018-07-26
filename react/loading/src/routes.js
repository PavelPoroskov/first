import users from './Users/routes'
import user from './User/routes'


// console.log('users')
// console.log(users)

// console.log('user')
// console.log(user)

let allRoutes = []

// allRoutes.concat(users)
// allRoutes.concat(user)

// for (const r of user) {
//   allRoutes.push(r)
// }
// for (const r of users) {
//   allRoutes.push(r)
// }

allRoutes.push(...users)
allRoutes.push(...user)

// console.log('allRoutes')
// console.log(allRoutes)

export default allRoutes