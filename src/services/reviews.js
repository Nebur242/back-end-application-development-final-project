const httpStatus = require("http-status");
const review = require("../models/review");
const { ApiError } = require("../utils/api-error");
const book = require("../models/book");

const findAll = ({ bookId }) => {
  if (!bookId) throw new ApiError(httpStatus.BAD_REQUEST, "Book id missing");
  return review.findAll({
    where: {
      bookId,
    },
  });
};

const create = async ({ userId, bookId, text }) => {
  const found = await review.findOne({
    where: { userId, bookId: bookId },
  });

  if (found) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "User already reviewed the book",
    );
  }

  return review.create({ userId, bookId, text });
};

const update = async ({ userId, text, id }) => {
  const found = await review.findOne({
    where: { userId: userId, id },
  });

  if (!found) {
    throw new ApiError(httpStatus.NOT_FOUND, "Review not found");
  }

  await review.update({ text }, { where: { id } });

  return review.findOne({
    where: { userId, id },
  });
};

const deleteReview = async ({ userId, id }) => {
  const deletedReview = await review.destroy({
    where: { userId, id },
  });

  if (!deletedReview) {
    throw new ApiError(httpStatus.NOT_FOUND, "No review found");
  }

  return `Review with id: ${deletedReview} deleted successfully!`;
};

module.exports = {
  create,
  findAll,
  update,
  deleteReview,
};
