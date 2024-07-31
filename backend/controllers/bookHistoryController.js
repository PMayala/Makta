const BookHistory = require('../models/BookHistory');

exports.getBorrowingHistory = async (req, res) => {
  try {
    const history = await BookHistory.find()
      .populate('book_id', 'title')
      .populate('member_id', 'name');
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.issueBook = async (req, res) => {
  try {
    const newRecord = new BookHistory(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { record_id, return_date } = req.body;
    const updatedRecord = await BookHistory.findByIdAndUpdate(
      record_id,
      { return_date, status: 'On-shelf' },
      { new: true, runValidators: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json(updatedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
