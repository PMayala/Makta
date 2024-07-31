import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StatsCards from "../components/organisms/StatsCards";
import { MainContext } from "../context/AppContext";

export default function Stats() {
  const { user } = useContext(MainContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const stats = [
    {
      data: 20,
      name: "Issues",
    },
    {
      data: 212,
      name: "Total Members",
    },
    {
      data: 3000,
      name: "Total books",
    },
  ];

  const handleClick = (event) => {
    event.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  const handleOptionClick = (path) => {
    handleCloseDropdown();
    navigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col h-full p-14 font-kumbh w-full">
      <h1 className="font-semibold text-2xl text-neutral-600">
        Welcome to your dashboard,{" "}
        <span className="text-blue-950 capitalize">{user?.name || 'User'}</span>
      </h1>
      <StatsCards data={stats} />
      <button
        className="absolute right-20 bottom-20 bg-blue-950 px-7 pt-5 pb-7 leading-7 rounded-full text-white text-4xl"
        onClick={handleClick}
      >
        +
      </button>
      {showDropdown && (
        <div ref={dropdownRef} className="absolute right-20 bottom-28 bg-white shadow-lg rounded-lg border border-gray-200 mt-2">
          <ul className="flex flex-col p-2">
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-green-200 rounded-t-lg"
                onClick={() => handleOptionClick('/dashboard/books')}
              >
                Add Book
              </button>
            </li>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-green-200 rounded"
                onClick={() => handleOptionClick('/dashboard/members')}
              >
                Add Member
              </button>
            </li>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-green-200 rounded-b-lg"
                onClick={() => handleOptionClick('/dashboard/issues')}
              >
                Issue Book
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}