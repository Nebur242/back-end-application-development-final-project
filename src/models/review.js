const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const book = require("./book");
const user = require("./user");

const review = sequelize.define(
  "reviews",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true },
);

user.belongsToMany(book, { through: review });
book.belongsToMany(user, { through: review });

module.exports = review;
