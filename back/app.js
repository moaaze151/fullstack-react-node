const express = require("express");
// const bodyParser = require("body-parser");
const postsRouter = require("./routes/posts");
const app = express();
// app.use(bodyParser.json());
app.use(express.json()); // as a middleware exchang of above
const PORT = 4000;

//Middleware ................................
const hello = (req, res, next) => {
  console.log("helloooooooooooooooo");
  next();
};
const logger = (err, req, res, next) => {
  console.log(req.url);
  next();
};
const errorMiddleware = (err, req, res, next) => {
//console.error(err.stack);
  res.status(400).json({ error: err });
  next();
};
//on all app
app.use(errorMiddleware);
app.use(logger);

//GET ..........................................
app.get("/", hello, (req, res) => {
  res.send("WELCOME TO OUR BLOG");
});
//Posts operations ............................
app.use("/posts",postsRouter);

//EXPRESS WORKS ................................
app.listen(PORT, () => {
  console.log(`runs on http:localhost:${PORT}`);
});
