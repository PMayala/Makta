import React, { useState } from 'react';

export default function IssueBookForm({ onClose, onIssueBook }) {
  const [issueData, setIssueData] = useState({
    student: '',
    class: '',
    book: '',
    ISBN: '',
    dateIssued: '',
    dueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssueData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onIssueBook(issueData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Issue a Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="student" className="block text-sm font-medium text-gray-700">Member Name</label>
            <input
              id="student"
              type="text"
              name="student"
              placeholder="Enter member name"
              value={issueData.student}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
            <select
              id="class"
              name="class"
              value={issueData.class}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Class</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
              <option value="S4">S4</option>
              <option value="S5">S5</option>
              <option value="S6">S6</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="book" className="block text-sm font-medium text-gray-700">Book Title</label>
            <input
              id="book"
              type="text"
              name="book"
              placeholder="Enter book title"
              value={issueData.book}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ISBN" className="block text-sm font-medium text-gray-700">ISBN</label>
            <input
              id="ISBN"
              type="text"
              name="ISBN"
              placeholder="Enter ISBN"
              value={issueData.ISBN}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateIssued" className="block text-sm font-medium text-gray-700">Date Issued</label>
            <input
              id="dateIssued"
              type="date"
              name="dateIssued"
              value={issueData.dateIssued}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              id="dueDate"
              type="date"
              name="dueDate"
              value={issueData.dueDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Issue Book
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
