const express = require("express");
const controller = require("../controllers/books");
const validate = require("../middlewares/validate");
const {
  titleParamsValidator,
  authorParamsValidator,
  isbnParamsValidator,
  createBookValidator,
} = require("../validators/books");

const router = express.Router();

router.get("/", controller.findAll);

router.post("/", validate(createBookValidator), controller.create);

router.get(
  "/title/:title",
  validate(titleParamsValidator),
  controller.findAllByTitle,
);

router.get(
  "/author/:author",
  validate(authorParamsValidator),
  controller.findAllByAuthor,
);

router.get(
  "/isbn/:isbn",
  validate(isbnParamsValidator),
  controller.findOneByIsbn,
);

router.get("/axios", controller.findAllWithAxios);

router.get(
  "/axios/title/:title",
  validate(titleParamsValidator),
  controller.findAllByTitleAxios,
);

router.get(
  "/axios/author/:author",
  validate(authorParamsValidator),
  controller.findAllByAuthorAxios,
);

router.get(
  "/axios/isbn/:isbn",
  validate(isbnParamsValidator),
  controller.findOneByIsbnAxios,
);

module.exports = router;
