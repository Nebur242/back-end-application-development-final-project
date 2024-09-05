const { catchAsync } = require("../utils/catch-async");
const services = require("../services/books");

const create = catchAsync((req, _res) => {
  return services.create(req.body);
});

const findAll = catchAsync((req, _res) => {
  return services.findAll();
});

const findAllByAuthor = catchAsync((req, _res) => {
  const { author } = req.params;
  return services.findAllByAuthor({ author });
});

const findAllByTitle = catchAsync((req, _res) => {
  const { title } = req.params;
  return services.findAllByTitle({ title });
});

const findOneByIsbn = catchAsync((req, _res) => {
  const { isbn } = req.params;
  return services.findOneByIsbn({ isbn });
});

module.exports = {
  create,
  findAll,
  findAllByAuthor,
  findAllByTitle,
  findOneByIsbn,
};
