// Create web server
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Sending a response
  res.end('Hello, world!');
});

// Listening on a port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});