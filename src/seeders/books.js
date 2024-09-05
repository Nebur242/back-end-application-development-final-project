"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          isbn: "978-0061120084",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          isbn: "978-0451524935",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          isbn: "978-1503290563",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          isbn: "978-0743273565",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Moby-Dick",
          author: "Herman Melville",
          isbn: "978-1503280786",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Book", null, {});
  },
};
