import { Router } from "express";
import { BookService } from "../services/book.service";
import { books } from "../entities/book.entity";

const router = Router();
const bookService = new BookService();

router.get("/", async (req, res) => {
  try {
    const book = await bookService.listOfBuys();
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const book: books = req.body;
    const createdBook = await bookService.order(book);
    res.json(createdBook);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const book: books = req.body;
    const updatedBook = await bookService.updateOrder(bookId, book);
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    await bookService.cancelOrder(bookId);
    res.json({ message: "Ordered cancel successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export { router as BookController };
