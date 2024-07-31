const express = require('express');
const {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');
const router = express.Router();

router.get('/', getBooks);
router.get('/:book_id', getBookById);
router.post('/', addBook);
router.put('/:book_id', updateBook);
router.delete('/:book_id', deleteBook);

module.exports = router;
