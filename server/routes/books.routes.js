const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controllers');

router.get('/', booksController.getBooks);
router.post('/', booksController.createBook);

module.exports = router;
