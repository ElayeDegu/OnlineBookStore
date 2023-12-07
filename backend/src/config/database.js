const Sequelize = require("sequelize");

const databaseConfig = {
  username: "<YOUR-USERNAME>",
  password: "<YOUR-PASSWORD>",
  database: "<YOUR-DATABASE>",
  host: "localhost",
  dialect: "postgres",
};

const sequelize = new Sequelize(databaseConfig);
module.exports = sequelize;
