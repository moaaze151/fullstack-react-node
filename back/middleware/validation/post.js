//Middleware:(Validate)  ..........................................
const rules = {
  wait: (req, res, next) => {
    console.log("wait");
    next();
  },
  id: (req, res, next) => {
    const pattern = /^[0-9]{1,3}$/;
    if (pattern.test(req.params.id)) {
      next();
    } else {
      next(
        `error:{
        name: "validation error",
        element: "params: id",
        message: "the post id must be s number from 1-999"
      }`
      );
    }
  },
  title: (req, res, next) => {
    const title = req.body.title ? req.body.title.trim() : undefined;
    if (title) {
      if (title.length < 7 || title.length > 70) {
        next(
          `error:{
            name: "validation error",
            element: "body: title",
            message: "the title should be smaller than 70 char and bigger than 7 char"
          }`
        );
      }
      req.body.title = title;
      next();
    }
    next();
  },
  body: (req, res, next) => {
    const body = req.body.body ? req.body.body.trim() : undefined;
    if (body) {
      if (body.length < 7 || body.length > 2000) {
        next(
          `error:{
            name: "validation error",
            element: "body: body",
            message: "the body should be smaller than 2000 char and bigger than 7 char"
          }`
        );
      }
      req.body.body = body;
      next();
    }
    next();
  },
  titleRequired: (req, res, next) => {
    if (req.body.title) {
      next();
    }
    next(
      `error:{
          name: "validation error",
          element: "body: title",
          message: "the post title is required"
        }`
    );
  },
  bodyRequired: (req, res, next) => {
    if (req.body.body) {
      next();
    }
    next(
      `error:{
          name: "validation error",
          element: "body: body",
          message: "the  post body is required"
        }`
    );
  },
  titleEmpty: (req, res, next) => {
    if (req.body.title === "") {
      next(
        `error:{
            name: "validation error",
            element: "body: title",
            message: "the post title cannot be empty "
          }`
      );
    }
    next();
  },
  bodyEmpty: (req, res, next) => {
    if (req.body.title === "") {
      next(
        `error:{
            name: "validation error",
            element: "body: body",
            message: "the post body cannot be empty "
          }`
      );
    }
    next();
  },
};
const validate = {
  getOne: [rules.wait, rules.id],
  deleteItem: [rules.id],
  updateItem: [
    rules.id,
    rules.titleEmpty,
    rules.bodyEmpty,
    rules.title,
    rules.body,
  ],
  addItem: [rules.bodyRequired, rules.titleRequired, rules.title, rules.body],
};
module.exports = validate;
