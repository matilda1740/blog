/* Response.send(); / response.sendFile() with this express automatically sets header depending on the response && auto sends the status code

__dirname gets us the directory for the file we are currently in
setting up the root for the server to have a relative path instead of looking through the whole comp(absolute path)

Method Use creates Middleware

Express runs line by line, the use method is called every single time and only applies when everything other condition set isn't met

404 - use - Must be at the very bottom of the file

Why do we set code to 404 - cause express can't tell that that html page is an error doc so we manually set it - response.status() return the response object */

const express = require("express");

const app = express();

// listen for requests - creates an instance of a server
app.listen(8080);

app.get("/", (request, response) => {
  //   response.send("<p>home page</p>");
  response.sendFile("./servers/server.html", { root: __dirname });
});

app.get("/about", (request, response) => {
  //   response.send("<p>about page</p>");
  response.sendFile("./servers/about.html", { root: __dirname });
});

// Remember Express auto sets status code to 301

app.get("/about-them", (request, response) => {
  response.redirect("/about");
});

app.use((request, response) => {
  response.status(404).sendFile("./servers/404.html", { root: __dirname });
});
