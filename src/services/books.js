const { v4: uuidv4 } = require("uuid");
const books = require("../models/book");
const { ApiError } = require("../utils/api-error");

const create = async ({ title, author, isbn }) => {
  const book = await books.findOne({ where: { title, author } });
  if (book) throw new ApiError(400, "Book already exists");
  return books.create({
    title,
    author,
    isbn: isbn || uuidv4(),
  });
};

//using async callback
const findAll = async () => {
  return books.findAll();
};

const findAllByTitle = async ({ title }) => {
  return books.findAll({
    where: {
      title,
    },
  });
};

//using promises
const findOneByIsbn = ({ isbn }) => {
  return books
    .findOne({
      where: {
        isbn,
      },
    })
    .then((book) => {
      if (!book) throw new ApiError(404, "Book not found !");
      return book;
    });
};

const findAllByAuthor = async ({ author }) => {
  return books.findAll({
    where: {
      author,
    },
  });
};

module.exports = {
  create,
  findAll,
  findAllByAuthor,
  findAllByTitle,
  findOneByIsbn,
};
