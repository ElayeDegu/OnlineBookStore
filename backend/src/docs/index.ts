const basicInfo = require("./basicInfo");
const servers = require("./servers");
const components = require("./components");
const tags = require("./tags");
const books = require('./books')

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...books,
};
