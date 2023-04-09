const http = require('http')

// asking for a server == request or req
// Giving for the asking from server == response or res

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    // end means that the server is done with the response
    res.end(`
  <h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
  `)
  }
})

// Listen is the method that will start the server or the port
server.listen(8080)
