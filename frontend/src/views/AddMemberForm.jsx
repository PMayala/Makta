import React, { useState } from 'react';

export default function AddmemberForm({ onClose, onAddmember }) {
  const [memberData, setmemberData] = useState({
    name: '',
    class: '',
    gender: '',
    department: '',
    member_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setmemberData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddmember(memberData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={memberData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <select
              name="class"
              value={memberData.class}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            >
              <option value="">Class</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
              <option value="S4">S4</option>
              <option value="S5">S5</option>
              <option value="S6">S6</option>
              <option value="Staff">Staff</option>
            </select>
            <select
              name="gender"
              value={memberData.gender}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type='text'
              name="member_id"
              placeholder="member ID"
              value={memberData.member_id}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={memberData.department}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Member
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}