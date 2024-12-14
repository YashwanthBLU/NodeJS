const http = require("http");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
};

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "staticFiles",
    req.url === "/" ? "index.html" : req.url
  );

  const extname = path.extname(filePath);

  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code == "ENOENT") {
        res.writeHead("404", { "content-type": "text/plain" });
        res.end("404 not found");
      } else {
        res.writeHead("500", { "content-type": "text/plain" });
        res.end("500 internal server errror");
      }
    } else {
      res.writeHead("200", { "content-type": contentType });
      res.end(data, "utf-8");
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at port 3000");
});
