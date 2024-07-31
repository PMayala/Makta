import React, { useState } from 'react';
import Button from "../atoms/Button";
import { Menu, X } from 'lucide-react';
import LoadingSpinner from '../atoms/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleAuth = async (action) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating async operation
      // Perform navigation based on action
      if (action === 'login') {
        navigate('/login'); // Adjust the path as needed
      } else if (action === 'register') {
        navigate('/register'); // Adjust the path as needed
      }
    } catch (error) {
      console.error(`Error during ${action}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const navItems = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Our Services' },
    { href: '#faqs', text: 'FAQs' },
    { href: '#contact', text: 'Contact Us' },
  ];

  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-32 font-karla">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold font-kumbh">
          Maktaba
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between gap-6 lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.slice(1))}
              className="text-white hover:text-yellow-500 transition duration-300"
            >
              {item.text}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex gap-4">
          <Button
            className="rounded-full bg-sky-500 text-sm hover:bg-sky-800 transition-all duration-300 transform hover:scale-105"
            title={isLoading ? 'Loading...' : 'Login'}
            onClick={() => handleAuth('login')}
            disabled={isLoading}
          />
          <Button
            className="rounded-full bg-green-500 text-sm hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
            title={isLoading ? 'Loading...' : 'Register'}
            onClick={() => handleAuth('register')}
            disabled={isLoading}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.slice(1))}
              className="text-white hover:text-yellow-500 transition duration-300"
            >
              {item.text}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button
              className="rounded-full bg-sky-500 w-full hover:bg-sky-800 transition duration-300 transform hover:scale-105"
              title={isLoading ? 'Loading...' : 'Login'}
              onClick={() => handleAuth('login')}
              disabled={isLoading}
            />
            <Button
              className="rounded-full bg-green-500 w-full hover:bg-green-800 transition duration-300 transform hover:scale-105"
              title={isLoading ? 'Loading...' : 'Register'}
              onClick={() => handleAuth('register')}
              disabled={isLoading}
            />
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingSpinner />
        </div>
      )}
    </nav>
  );
}
