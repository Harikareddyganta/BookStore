const Book = require("../model/Book.js");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) return res.status(404).json({ message: "No books found" });
  return res.status(200).json({ books });
};

const getBookById = async (req, res, next) => {
  const id = req.params.id;
  let books;
  try {
    books = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!books) return res.status(404).json({ message: "No books found" });
  return res.status(200).json({ books });
};

const addNewBook = async (req, res, next) => {
  const { name, author, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      price,
      available,
      image,
    });
    book.save();
  } catch (err) {
    res.status(404);
  }

  if (!book) res.status(500).json({ message: "unable to add" });
  res.status(200).json({ book });
};

const updateBook = async (req, res, next) => {
  let books;
  const id = req.params.id;
  const { name, author, price, available, image } = req.body;
  try {
    books = await Book.findByIdAndUpdate(id, {
      name,
      author,
      price,
      available,
      image,
    });
    books = await books.save();
  } catch (error) {
    console.log(error);
  }
  if (!books) res.status(500).json({ message: "unable to add" });
  res.status(200).json({ books });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let deletedBook;
  try {
    deletedBook = await Book.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to delete book" });
  }

  if (!deletedBook) {
    return res.status(404).json({ message: "Book not found" });
  }
  // Return the deleted book
  return res.status(200).json({ book: deletedBook });
};
exports.addNewBook = addNewBook;
exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
