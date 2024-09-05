const express = require("express");
const controller = require("../controllers/reviews");
const authenticate = require("../middlewares/authenticate");
const validate = require("../middlewares/validate");
const {
  createReviewValidator,
  updateReviewValidator,
} = require("../validators/reviews");

const router = express.Router();

router.get("/", controller.findAll);
router.post(
  "/",
  authenticate,
  validate(createReviewValidator),
  controller.create,
);
router.patch(
  "/:id",
  authenticate,
  validate(updateReviewValidator),
  controller.update,
);
router.delete("/:id", authenticate, controller.deleteReview);

module.exports = router;
