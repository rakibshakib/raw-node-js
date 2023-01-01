/* 
Title: Uptime Monitoring Application
Author: Rakibul Islam
Date: 26-12-22
*/

// dependecies
const http = require("http");
const url = require("url");

// app object - module scaffolding
const app = {};

// config

app.config = {
  port: 4000, // server port
};

// server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log("Listening on port " + app.config.port);
  });
};

// handler req res
app.handleReqRes = (req, res) => {
  // request handling
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const trimedPath = pathname.replace(/^\/+|\/+$/g, "");

  console.log(trimedPath);

  res.end("Hello World! server runing...");
};

// starting server
app.createServer();
