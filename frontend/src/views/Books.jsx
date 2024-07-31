import React, { useState, useEffect, useContext } from 'react';
import AddBookForm from './AddBookForm'; // Adjust the path according to your file structure
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../context/AppContext';

/* const initialBooksData = [
  { title: 'Advanced Physics 55', barcode: '123456789345', author: 'Plamedi', category: 'Science', language: 'English', copies: 12, status: 'On-shelf' },
  { title: 'The Light', barcode: '123423453456', author: 'Ethane', category: 'Novel', language: 'French', copies: 3, status: 'Issued' },
  // Add more entries as needed
]; */

export default function Books() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : initialBooksData;
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null); // State for the selected book

  const handleAddBook = (newBook) => {
    console.log('New book received in handleAddBook:', newBook); // Log new book data
    const updatedBooks = [...books, newBook];
    console.log('Updated books list:', updatedBooks); // Log updated books list
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks)); // Save to local storage
    setShowAddForm(false); // Close the form after adding the book
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books)); // Update local storage on books change
  }, [books]);

  const filteredBooks = books.filter(book => {
    return Object.values(book).some(val =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleRowClick = (book) => {
    setSelectedBook(book); // Set the selected book
  };

  const closeBookDetails = () => {
    setSelectedBook(null); // Close the modal
  };

  const { logOut } = useContext(MainContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
            onClick={() => setShowAddForm(true)}
          >
            Add Book
          </button>
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-500" />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-300" onClick={handleLogOut}>Log out</button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded"
              placeholder="Search for a book by ISBN, name, subject, author, language, publisher, or status"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bar-code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copies</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredBooks.map((book) => (
              <tr key={book.barcode} onClick={() => handleRowClick(book)} className="hover:bg-green-100 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{book.title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.barcode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.language}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.copies}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${book.status === 'On-shelf' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {book.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showAddForm && (
          <AddBookForm
            onClose={() => setShowAddForm(false)}
            onAddBook={handleAddBook}
          />
        )}

        {selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-2xl font-bold mb-4">{selectedBook.title}</h2>
              <p><strong>Barcode:</strong> {selectedBook.barcode}</p>
              <p><strong>Author:</strong> {selectedBook.author}</p>
              <p><strong>Category:</strong> {selectedBook.category}</p>
              <p><strong>Language:</strong> {selectedBook.language}</p>
              <p><strong>Copies:</strong> {selectedBook.copies}</p>
              <p><strong>Status:</strong> {selectedBook.status}</p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={closeBookDetails}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
