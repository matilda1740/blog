const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((request, response) => {
  let { method, url, statusCode } = request;
  console.log(url, method, statusCode);
  // LODASH

  const num = _.random(0, 20);
  console.log(num);

  // set header content type
  response.setHeader("Content-Type", "text/html");

  let path = "";
  switch (url) {
    case "/":
      path += "server.html";
      statusCode = 200;
      break;

    case "/index":
      path += "server.html";
      statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      statusCode = 200;
      break;

    // Redirect about me to about
    case "/about-me ":
      statusCode = 301;
      response.setHeader("Location", "/about");
      response.end();
      break;
    default:
      path += "404.html";
      statusCode = 404;
      break;
  }

  // reading the html file
  const blue = fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      response.end();
    }
    // response.write(data); // if one thing just pass into end method
    response.end(data);
  });
});

server.listen(5500, "localhost", () => {
  console.log("Listening for 3000 requests");
});
