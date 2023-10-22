const http = require("http");

const server = http.createServer((req, res) => {
  // Routes
  console.log("abcd");

  const url = req.url;
  const method = req.method;
  console.log(url, " url", method, "methods");

  res.setHeader("Content-Type", "text/html");

  // Handling ROUTES and METHODS

  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      res.write("<h1>Hello gys welcome to the palace!!!</h1>");
      res.end();
    } else {
      res.statusCode = 405;
      res.end("Reques method not allowed ");
    }
  } else if (url === "/about") {
    res.statusCode = 200;
    res.end("<h1>About: we are a nice company!!</h1>");
  } else if (url === "/contact") {
    res.statusCode = 201;
    res.end("<h1>PhoneNo: 88034234234, email: thakurutkarsh2@gmail.com</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not found so someplace else</h1>");
  }
});

const port = 3005;

// TODO: hostname Explain ---..
server.listen(port, () => {
  console.log("Server is running on the port ", port);
});

// cold Start .....
