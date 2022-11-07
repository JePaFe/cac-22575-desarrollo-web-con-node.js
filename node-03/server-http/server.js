const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
//   const file = fs.readFileSync("index.html");
  const file = fs.readFileSync(__dirname + "/index.html");
  response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  response.end(file);
});

server.listen(5000, () => console.log("http://localhost:5000"));
