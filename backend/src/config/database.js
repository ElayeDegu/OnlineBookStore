const Sequelize = require("sequelize");

const databaseConfig = {
  username: "postgres",
  password: "Esku2212",
  database: "HypeTest",

  host: "localhost",
  dialect: "postgres",
};

const sequelize = new Sequelize(databaseConfig);
module.exports = sequelize;
