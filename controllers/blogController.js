/* 
    1. blog_index -- get all the blogs and inject into index view
    2. blog_details -- get a single blog
    3. blog_create_get -- send form back 
    4. blog_create_post -- create form 
    5. blog_delete  -- delete form 

*/

const Blog = require("../models/blog");
const { response, request } = require("express");

const blog_create_get = (request, response) => {
  response.render("blogs/new", { header: "New Blog" });
};

const blog_index = (request, response) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      response.render("blogs/index", { blogs: result, header: "All blogs" });
    })
    .catch((error) => {
      console.log(error);
    });
};

const blog_details = (request, response) => {
  const id = request.params.id;
  Blog.findById(id)
    .then((result) =>
      response.render("blogs/details", { blog: result, header: "Blog Details" })
    )
    .catch((error) => {
      response.status(404).render("404", { header: "Blog Not Found" });
    });
};

const blog_create_post = (request, response) => {
  const blog = new Blog(request.body);
  blog
    .save()
    .then((result) => {
      response.redirect("/blogs");
    })
    .catch((error) => console.log(error));
};

const blog_delete = (request, response) => {
  const id = request.params.id;
  // goes out to the database and deletes it
  // when you use AJAX on the browser, you have to send json data back
  //  then the json has redirect property
  Blog.findByIdAndDelete(id)
    .then((result) => {
      response.json({ redirect: "/blogs" });
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  blog_create_get,
  blog_index,
  blog_details,
  blog_create_post,
  blog_delete,
};
