const posts = require("../models/data");

const controller = {
  getAll: (req, res) => {
    // we will send just 10 posts as a request
    const itemsPerPage = 10;
    const requestedPage = req.query.page - 1 || 0;
    const pagesCount =Math.ceil( posts.length / itemsPerPage);
    const s = requestedPage * itemsPerPage;//start
    const e = s + itemsPerPage;//end
    const paginatedPosts = posts.filter((el, i) => i >= s && i < e);
    console.log(paginatedPosts);
    res.status(200).json({ posts: paginatedPosts,pagesCount: pagesCount});
  },
  getId: (req, res) => {
    const post = posts.find((e) => e.id === parseInt(req.params.id));
    if (post === undefined) {
      res.status(404).json({ msg: "not found" });
    } else {
      res.status(200).json({ myPost: post });
    }
  },
  addItem: (req, res) => {
    const id = posts[posts.length - 1].id;
    const item = {
      userId: 1,
      id: id + 1,
      title: req.body.title,  
      body: req.body.body,
    };
    posts.push(item);
    res.status(200).json({ msg: item });
  },
  deleteItem: (req, res) => {
    const post = posts.find((e) => e.id === parseInt(req.params.id));
    if (post === undefined) {
      res.status(404).json({ msg: "not found" });
    } else {
      const index = posts.indexOf(post);
      posts.splice(index, 1);
      res.status(200).json({ msg: "it is deleted" });
    }
  },
  updateItem: (req, res) => {
    const post = posts.find((e) => e.id === parseInt(req.params.id));
    if (post) {
      if (!req.body.body && !req.body.title) {
        res.status(200).json({ msg: "You ave'nt provided any value" });
      } else {
        post.title = req.body.title ? req.body.title : post.title;
        post.body = req.body.body ? req.body.body : post.body;

        res.status(200).json({ msg: "it is updated" });
      }
    } else {
      res.status(404).json({ msg: "not found" });
    }
  },
};

module.exports = controller;
