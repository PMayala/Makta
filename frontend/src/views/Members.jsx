// src/views/Members.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Bell } from 'lucide-react';
import AddMemberForm from './AddMemberForm';
import MemberDetailsPopup from './MemberDetailsPopup';  // Import the popup component
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../context/AppContext';

const getMembersFromLocalStorage = () => {
  const storedMembers = localStorage.getItem('members');
  return storedMembers ? JSON.parse(storedMembers) : [];
};

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false); // Add state for the popup
  const [selectedMember, setSelectedMember] = useState(null); // Add state for the selected member
  const [members, setMembers] = useState(getMembersFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.member_id.includes(searchTerm) ||
    member.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.gender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = (newMember) => {
    setMembers(prevMembers => [...prevMembers, { ...newMember, id: Date.now().toString() }]);
    setShowAddForm(false);
  };

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setShowDetailsPopup(true);
  };

  const handleClosePopup = () => {
    setShowDetailsPopup(false);
    setSelectedMember(null);
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
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Add Member
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
              placeholder="Search for a member by id, name, gender or class"
              className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">History</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredMembers.map((member, index) => (
              <tr key={member.id} className={index % 2 === 1 ? 'bg-green-100' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={`/api/placeholder/${40 + index}/${40 + index}`} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.member_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                  <button
                    onClick={() => handleViewDetails(member)}
                    className="text-green-500 hover:text-green-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddForm && (
        <AddMemberForm
          onClose={() => setShowAddForm(false)}
          onAddmember={handleAddMember}
        />
      )}

      {showDetailsPopup && selectedMember && (
        <MemberDetailsPopup
          member={selectedMember}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
