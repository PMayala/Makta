const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['student', 'staff'],
    required: true,
  },
  joined_date: {
    type: Date,
    required: true,
  },
  class: {
    type: String,
  },
  department: {
    type: String,
  },
  class_teacher: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model('Member', MemberSchema);
