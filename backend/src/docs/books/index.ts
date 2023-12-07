const getBooks = require("./get-books");
const getBook = require("./get-book");
const orderBook = require("./order-book");
const updateBook = require("./update-book");
const cancelOrder = require("./cancel-order");

module.exports = {
  paths: {
    "/books": {
      ...getBooks,
      ...orderBook,
    },
    "/books/{id}": {
      ...getBook,
      ...updateBook,
      ...cancelOrder,
    },
  },
};
