"use strict";
const { Sequelize, DataTypes, Model } = require("sequelize");

const databaseConfig = {
  username: "postgres",
  password: "Esku2212",
  database: "HypeTest",

  host: "localhost",
  dialect: "postgres",
};

const sequelize = new Sequelize(databaseConfig);
module.exports = sequelize;

module.exports = () => {
  class books extends Model {
    static associate(models) {}
  }
  books.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: {
        type: DataTypes.STRING,
        defaultValue: "Bad Life",
      },
      writer: {
        type: DataTypes.STRING,
        defaultValue: "Sara Jeff",
      },
      coverImage: {
        type: DataTypes.STRING,
        defaultValue:
          "https://pics.clipartpng.com/Black_Book_PNG_Clipart-1048.png",
      },
      price: {
        type: DataTypes.STRING,
        defaultValue: "1574",
      },
      tag: {
        type: DataTypes.ENUM,
        values: ["fiction", "non-fiction", "“science”", "“essay”"],
        defaultValue: "FICTION",
      },
    },
    {
      // Other model options go here
      sequelize: sequelize,
      modelName: "books",
    }
  );

  // the defined model is the class itself
  console.log(books === sequelize.models.books); // true

  return books;
};
