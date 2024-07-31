const express = require('express');
const {
  getBorrowingHistory,
  issueBook,
  returnBook,
} = require('../controllers/bookHistoryController');
const router = express.Router();

router.get('/', getBorrowingHistory);
router.post('/issue', issueBook);
router.post('/return', returnBook);

module.exports = router;
