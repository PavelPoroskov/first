// import http from 'http';

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World 22\n');
// }).listen(1337, '127.0.0.1');


import Express from 'express'


const app = Express()
//const port = 3000
const port = 1337

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)
//app.use(handleRender_AsyncFetchData)

// // We are going to fill these out in the sections to follow
// function handleRender(req, res) { /* ... */ }
// function renderFullPage(html, preloadedState) { /* ... */ }
function handleRender(req, res) {
//(
//  const store = createStore(counterApp)


//   // Read the counter from the request, if provided
//   const params = qs.parse(req.query)
//   const counter = parseInt(params.counter, 10) || 0

//   // Compile an initial state
//   let preloadedState = { counter }

//   // Create a new Redux store instance
//   const store = createStore(counterApp, preloadedState)
// //)

//   // Render the component to a string
//   const html = renderToString(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )

//   // Grab the initial state from our Redux store
//   const finalState = store.getState()

//   // Send the rendered page back to the client
//   res.send(renderFullPage(html, finalState))

   res.send('Hello World! 33')
}

//app.listen(port)
app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
//console.log('Server running at http://127.0.0.1:1337/');
