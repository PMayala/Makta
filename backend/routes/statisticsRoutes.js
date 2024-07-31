const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/statisticsController');

router.get('/books-by-category', statisticsController.getBooksByCategory);
router.get('/most-borrowed-books', statisticsController.getMostBorrowedBooks);
router.get('/overdue-books', statisticsController.getOverdueBooks);
router.get('/member-activity', statisticsController.getMemberActivity);

module.exports = router;
