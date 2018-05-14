export const dataFetcher = url => {
  // throw new Promise((resolve, reject) => {
  //   // fake latency
  //   setTimeout(() => resolve({title: 'title11', body: 'body11'}), 2000)
  // })

  throw new Promise((resolve, reject) => {
    fetch(url).then(response => {
      if (response.ok) {
        // fake latency for demo purposes
        setTimeout(() => resolve(response.json()), 2000)
      } else {
        reject(new Error('error'))
      }
    })
    // .catch(error => {
    //   reject(new Error(error.message))
    // })
  })

//  throw fetch(url).then(response => response.json())
}