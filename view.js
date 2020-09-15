// NOTES AT THE BOTTOM
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// connect to mongodb
const db =
  "mongodb+srv://blogs9876:blogs9876@intro-blogs.qvfgl.mongodb.net/food-blogs?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(8000))
  .catch((error) => console.log(error.message));

// Register View Engine
app.set("view engine", "ejs");

// Middleware and static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// ROUTES
app.get("/", (request, response) => {
  response.redirect("/blogs");
});

app.get("/about", (request, response) => {
  response.render("about", { header: "About" });
});

// Blog Routes

app.use("/blogs", blogRoutes);

app.use((request, response) => {
  response.status(404).render("404", { header: "Error Page" });
});

// Telling express to look for the engine files in servers - skip if folder name is Views

// app.set("views", "servers");

/*
      STEP 1 : Register View Engine
      STEP 2 : Get pages + Error Page
      STEP 3 : Register View Engine

*/

// Serving Static Files - Express static middleware
// {useNewUrlParser: true, useUnifiedTopology: true } - this removes that deprecation we get after connecting just the db

// Creating middleware for every request

// app.use((request, response, next) => {
//   console.log("new request made");
//   console.log("host", request.hostname);
//   console.log("path", request.path);
//   console.log("method", request.method);
//   next();
// });

// Replacing the above with Morgan
// you can use dev, tiny, .....

//  MONGOOSE AND MONGO SANDBOX ROUTES

// app.get("/add-blog", (request, response) => {
//   // new instance
//   const one = new Blog({
//     title: "new3",
//     snippet:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, doloribus?",
//     body:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, doloribus?",
//   });

//   // saving instance
//   one
//     .save()
//     .then((result) => {
//       response.send(result);
//     })
//     .catch((error) => console.log(error));
// });

// // getting blogs from db

// app.get("/all-blog", (request, response) => {
//   Blog.find()
//     .then((result) => response.send(result))
//     .catch((error) => console.log(error));
// });

// // find single blog

// app.get("/single-blog", (request, response) => {
//   Blog.findById("5f5f4a6731855b2e6aa0d3a8")
//     .then((result) => response.send(result))
//     .catch((error) => console.log(error));
// });
