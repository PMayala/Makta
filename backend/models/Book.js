const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  published_year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  copies: {
    type: Number,
    required: true,
  },
  image: {
    type: Buffer,
  },
});

module.exports = mongoose.model('Book', BookSchema);
