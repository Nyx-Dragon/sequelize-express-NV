const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controllers');

router.get('/', booksController.getBooks);
router.post('/', booksController.createBook);
router.delete("/:id", booksController.deleteBook);
router.put("/:id", booksController.updateBook);

module.exports = router;
