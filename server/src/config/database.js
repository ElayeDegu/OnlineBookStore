const Sequelize = require('sequelize');

const databaseConfig = {
 database: '<YOUR-DATABASE>',
 username: '<YOUR-USERNAME>',
 password: '<YOUR-PASSWORD>',
 host: 'localhost',
 dialect: 'postgres',
};

const sequelize = new Sequelize(databaseConfig);
module.exports = sequelize;


