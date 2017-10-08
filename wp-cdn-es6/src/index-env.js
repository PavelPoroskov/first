// if (process.env.NODE_ENV === 'production') {
//   console.log('Welcome to production');
// }

export default (str) => {
	if (process.env.NODE_ENV === 'production') {
	  console.log('Welcome to production');
	}

	return '*' + str + '*';
}