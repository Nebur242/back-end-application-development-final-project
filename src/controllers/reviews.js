const { catchAsync } = require("../utils/catch-async");
const services = require("../services/reviews");

const create = catchAsync(async (req, _res) => {
  const { id: userId } = req.user;
  const { bookId, text } = req.body;
  return services.create({ userId, bookId, text });
});

const update = catchAsync(async (req, _res) => {
  const { id: userId } = req.user;
  const { text } = req.body;
  const { id } = req.params;
  return services.update({ userId, text, id });
});

const findAll = catchAsync((req, _res) => {
  const { bookId } = req.query;
  return services.findAll({ bookId });
});

const deleteReview = catchAsync((req, res) => {
  const { id: userId } = req.user;
  const { id } = req.params;

  return services.deleteReview({ id, userId });
});

module.exports = {
  create,
  findAll,
  update,
  deleteReview,
};
