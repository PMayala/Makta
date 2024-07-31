const mongoose = require('mongoose');

const BookHistorySchema = new mongoose.Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  member_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
  },
  issue_date: {
    type: Date,
    required: true,
  },
  return_date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['issued', 'On-shelf'],
    required: true,
  },
});

module.exports = mongoose.model('BookHistory', BookHistorySchema);
