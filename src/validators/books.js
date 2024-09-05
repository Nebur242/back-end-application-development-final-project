const joi = require("joi");

const titleParamsValidator = {
  params: joi.object().keys({
    title: joi.string().required(),
  }),
};

const authorParamsValidator = {
  params: joi.object().keys({
    author: joi.string().required(),
  }),
};

const isbnParamsValidator = {
  params: joi.object().keys({
    isbn: joi.string().required(),
  }),
};

const createBookValidator = {
  body: joi.object().keys({
    title: joi.string().required(),
    author: joi.string().required(),
    isbn: joi.string().optional(),
  }),
};

module.exports = {
  titleParamsValidator,
  authorParamsValidator,
  isbnParamsValidator,
  createBookValidator,
};
