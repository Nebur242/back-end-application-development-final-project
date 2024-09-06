const { v4: uuidv4 } = require("uuid");
const books = require("../models/book");
const { ApiError } = require("../utils/api-error");
const httpStatus = require("http-status");
const { default: axios } = require("axios");

const create = async ({ title, author, isbn }) => {
  const book = await books.findOne({ where: { title, author } });
  if (book) throw new ApiError(httpStatus.BAD_REQUEST, "Book already exists");
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
      if (!book) throw new ApiError(httpStatus.NOT_FOUND, "Book not found !");
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

const findAllWithAxios = async () => {
  const response = await axios.get("http://localhost:3000/api/v1/books");
  return response.data.data;
};

const findOneByIsbnAxios = async ({ isbn }) => {
  return axios
    .get(`http://localhost:3000/api/v1/books/isbn/${isbn}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        error?.mesaage || "Axios error",
      );
    });
};

const findAllByAuthorAxios = async ({ author }) => {
  const response = await axios.get(
    `http://localhost:3000/api/v1/books/author/${author}`,
  );
  return response.data.data;
};

const findAllByTitleAxios = async ({ title }) => {
  const response = await axios.get(
    `http://localhost:3000/api/v1/books/title/${title}`,
  );
  return response.data.data;
};

module.exports = {
  create,
  findAll,
  findAllByAuthor,
  findAllByTitle,
  findOneByIsbn,
  findAllWithAxios,
  findOneByIsbnAxios,
  findAllByAuthorAxios,
  findAllByTitleAxios,
};
