// src/views/MemberDetailsPopup.jsx
import React from 'react';

export default function MemberDetailsPopup({ member, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{member.member_id}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        
        <div className="flex items-center mb-6">
          <img src={`/api/placeholder/128/128`} alt={member.name} className="w-32 h-32 rounded-full mr-6" />
          <div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.class}</p>
            <p className="text-gray-600">{member.gender}</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-4">History</h4>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Book</th>
              <th className="px-4 py-2 text-left">ISBN</th>
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Language</th>
              <th className="px-4 py-2 text-left">Days</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {member.bookHistory && member.bookHistory.map((book, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.subject}</td>
                <td className="px-4 py-2">{book.language}</td>
                <td className="px-4 py-2">{book.days}</td>
                <td className="px-4 py-2">{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
