// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class books extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   books.init({
//     id: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     writer: DataTypes.STRING,
//     coverImage: DataTypes.STRING,
//     price: DataTypes.DOUBLE,
//     tag: DataTypes.ENUM
//   }, {
//     sequelize,
//     modelName: 'books',
//   });
//   return books;
// };

'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

const databaseConfig = {
 database: 'HypeTest',
 username: 'postgres',
 password: 'Esku2212',
 host: 'localhost',
 dialect: 'postgres',
};

const sequelize = new Sequelize(databaseConfig);
module.exports = sequelize;

module.exports = () => {
  class books extends Model {
    static associate(models) {
    }
  }
books.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {
    type: DataTypes.STRING,
    defaultValue: "Test Ella"
  },
  writer: {
    type: DataTypes.STRING,
    defaultValue: "Ella Test"
  },
  coverImage: {
    type: DataTypes.STRING,
    defaultValue: "https://pics.clipartpng.com/Black_Book_PNG_Clipart-1048.png"
  },
  price: {
    type: DataTypes.STRING,
    defaultValue: "850"
  },
  tag: {
    type: DataTypes.ENUM,
    values: ['fiction', 'non-fiction', '“science”', '“essay”'],
    defaultValue: "SCIENCE"
  }
  }
, {
  // Other model options go here
  sequelize: sequelize, 
  modelName: 'books' 
});

// the defined model is the class itself
console.log(books === sequelize.models.books); // true

return books;
};