const sequelize = require("../config/database").sequelize;
import { books } from "../entities/book.entity";
import { DataTypes, Model } from "sequelize";

const Sequelize = require("sequelize");
// Bring in Model
const Book = require("../../models/books")(sequelize, DataTypes, Model);

export class BookRepository {
  private bookModel: typeof Book;

  constructor() {
    this.bookModel = Book;
  }

  public async listOfBuys(): Promise<books[]> {
    return this.bookModel.findAll();
  }

  public async order(book: books): Promise<books> {
    return this.bookModel.create(book);
  }

  public async updateOrder(bookId: number, book: books): Promise<books> {
    const updatedBook = await this.bookModel.findByPk(bookId);
    if (updatedBook) {
      updatedBook.title = book.title;
      updatedBook.writer = book.writer;
      updatedBook.coverImage = book.coverImage;
      updatedBook.price = book.price;
      await updatedBook.save();
    }
    return updatedBook;
  }

  public async cancelOrder(bookId: number): Promise<void> {
    const book = await this.bookModel.findByPk(bookId);
    if (book) {
      await book.destroy();
    }
  }
}
