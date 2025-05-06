const Book = require("../models/Book");
const Author = require("../models/Authors");
const Order = require("../models/Order");

const getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.update(req.body, { where: { id } });
  res.json(book);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  await Book.destroy({ where: { id } });
  res.status(204).send();
};

module.exports = { getBooks, createBook, updateBook, deleteBook };