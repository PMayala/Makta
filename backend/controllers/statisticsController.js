const Book = require('../models/Book');
const BookHistory = require('../models/BookHistory');
const Member = require('../models/Member');

exports.getBooksByCategory = async (req, res) => {
    try {
        const booksByCategory = await Book.aggregate([
            { $group: { _id: "$category", count: { $sum: 1 } } }
        ]);
        res.json(booksByCategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getMostBorrowedBooks = async (req, res) => {
    try {
        const mostBorrowedBooks = await BookHistory.aggregate([
            { $match: { status: 'issued' } },
            { $group: { _id: "$book_id", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ]);
        res.json(mostBorrowedBooks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getOverdueBooks = async (req, res) => {
    try {
        const overdueBooks = await BookHistory.find({ return_date: { $lt: new Date() }, status: 'issued' })
            .populate('book_id member_id');
        res.json(overdueBooks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getMemberActivity = async (req, res) => {
    try {
        const memberActivity = await BookHistory.aggregate([
            { $group: { _id: "$member_id", borrowedBooks: { $push: "$book_id" }, count: { $sum: 1 } } }
        ]).exec();
        res.json(memberActivity);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
