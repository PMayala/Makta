import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import Modal from './Modal'; 
import IssueBookForm from './IssueBookForm'; 

// Function to get issues from local storage
const getIssuesFromLocalStorage = () => {
  const issues = localStorage.getItem('issues');
  return issues ? JSON.parse(issues) : [];
};

// Function to save issues to local storage
const saveIssuesToLocalStorage = (issues) => {
  localStorage.setItem('issues', JSON.stringify(issues));
};

export default function IssuingBook() {
  const [issues, setIssues] = useState(getIssuesFromLocalStorage());
  const [selectedBook, setSelectedBook] = useState(null);
  const [isIssuing, setIsIssuing] = useState(false);

  useEffect(() => {
    // Save issues to local storage whenever issues change
    saveIssuesToLocalStorage(issues);
  }, [issues]);

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setIsIssuing(false);
  };

  const handleIssueBook = (issueData) => {
    setIssues(prevIssues => [
      ...prevIssues,
      { id: prevIssues.length + 1, ...issueData },
    ]);
    setIsIssuing(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
            onClick={() => setIsIssuing(true)}
          >
            Issue a Book
          </button>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500" />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300">Log out</button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-full border rounded"
              placeholder="Search for a member by id, name, gender or class"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Issued</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manage</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {issues.map((issue) => (
              <tr key={issue.id} className="hover:bg-green-100 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{issue.student}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.book}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.ISBN}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.dateIssued}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.dueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleViewDetails(issue)}
                    className="text-green-600 hover:text-green-900 transition duration-300"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedBook && (
          <Modal onClose={handleCloseModal}>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Book Details</h2>
              <p><strong>Student:</strong> {selectedBook.student}</p>
              <p><strong>Class:</strong> {selectedBook.class}</p>
              <p><strong>Book:</strong> {selectedBook.book}</p>
              <p><strong>ISBN:</strong> {selectedBook.ISBN}</p>
              <p><strong>Date Issued:</strong> {selectedBook.dateIssued}</p>
              <p><strong>Due Date:</strong> {selectedBook.dueDate}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Modal>
        )}

        {isIssuing && (
          <Modal onClose={handleCloseModal}>
            <IssueBookForm onIssueBook={handleIssueBook} onClose={handleCloseModal} />
          </Modal>
        )}
      </div>
    </div>
  );
}
