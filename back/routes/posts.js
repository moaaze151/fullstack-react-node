const express = require("express");
const controller = require("../controllers/post");
const validate = require("../middleware/validation/post");
const route = express.Router();


//GET ..........................................
route.get("/", controller.getAll);
route.get("/:id", validate.getOne, controller.getId);


//DELETE .......................................
route.delete("/:id",validate.deleteItem, controller.deleteItem);

//MODIFY .......................................
route.patch("/:id",validate.updateItem, controller.updateItem);

//ADD ..........................................
route.post("/",validate.addItem, controller.addItem);

module.exports = route;
