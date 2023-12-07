import { BookRepository } from "../repositories/book.repository";
import { books } from "../entities/book.entity";

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  public async listOfBuys(): Promise<books[]> {
    return this.bookRepository.listOfBuys();
  }

  public async order(book: books): Promise<books> {
    return this.bookRepository.order(book);
  }

  public async updateOrder(bookId: number, book: books): Promise<books> {
    return this.bookRepository.updateOrder(bookId, book);
  }

  public async cancelOrder(bookId: number): Promise<void> {
    return this.bookRepository.cancelOrder(bookId);
  }
}
