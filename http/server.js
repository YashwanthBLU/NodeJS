const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("200", { "Content-Type": "text/plain" });

  if (req.url === "/") res.end("Welcome to home");
  else if (req.url === "/about") res.end("About us");
  else if (req.url === "/contact") res.end("Contact us");
  else {
    res.end("page not found");
  }
});

server.listen(3000, () => {
  console.log("server is running at port:3000");
});
