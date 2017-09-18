// import http from 'http';

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World 22\n');
// }).listen(1337, '127.0.0.1');


import Express from 'express'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './client/reducers'
import App from './client/App'
//import { fetchCounter } from './api/counter'




const app = Express()
//const port = 3000
const port = 1337

// console.log('__dirname: ', __dirname )
// console.log('__filename: ', __filename )
// console.log('process.env.PWD: ', process.env.PWD )
// console.log('process.cwd(): ', process.cwd() )
// console.log('process.argv[0]: ', process.argv[0] )
// console.log('process.argv[1]: ', process.argv[1] )
let __filename0 = process.argv[1]
let __dirname0 = path.dirname(__filename0)
//console.log('__dirname0: ', __dirname0 )


//Serve static files
//app.use('/static', Express.static('static'))
//app.use( Express.static(path.join(__dirname, '../public'), {
//app.use( Express.static('../public', {
app.use( Express.static(path.join(__dirname0, '../public'), {
  dotfiles: 'ignore',
  index: false
}));

// This is fired every time the server side receives a request
app.use(handleRender)
//app.use(handleRender_AsyncFetchData)

// // We are going to fill these out in the sections to follow
// function handleRender(req, res) { /* ... */ }
// function renderFullPage(html, preloadedState) { /* ... */ }
function handleRender(req, res) {
//(
// const store = createStore(reducers)


  // // Read the counter from the request, if provided
  // const params = qs.parse(req.query)
  // const counter = parseInt(params.counter, 10) || 0

  const counter = 44;
  // Compile an initial state
//  let preloadedState = { counter }
  let preloadedState = counter

  // Create a new Redux store instance
  const store = createStore(reducers, preloadedState)
//)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState))

//   res.send('Hello World! 33')
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel='stylesheet' href='/css/styles.css'>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
    `
}


//app.listen(port)
app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
//console.log('Server running at http://127.0.0.1:1337/');
