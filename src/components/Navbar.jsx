import React, { useState } from 'react';
import CurrencyModal from './CurrencyModal/CurrencyModal';
import AuthModal from './AuthModal/AuthModal';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
            <img src="public/images/logo.png" alt="Logo" className='navbar-logo'/>
            <div className="navbar-brand">RRR Travels</div>
        {/* Search Bar */}
        <div className="navbar-search">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search destinations, activities..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="navbar-buttons">
          {/* Currency Selector */}
          <button
            onClick={() => setIsCurrencyModalOpen(true)}
            className="currency-button"
          >
            <img
              src="https://flagcdn.com/in.svg"
              srcSet="https://flagcdn.com/in.svg 1x, https://flagcdn.com/w40/in.png 2x"
              alt="India Flag"
              className="flag-icon"
            />
            <span className="currency-text">INR ₹</span>
            <svg
              className="dropdown-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414 5.293 8.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Login Button */}
          <button
            className="login-button"
            onClick={() => setIsAuthModalOpen(true)}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Currency Modal */}
      {isCurrencyModalOpen && (
        <CurrencyModal
          isOpen={isCurrencyModalOpen}
          onClose={() => setIsCurrencyModalOpen(false)}
        />
      )}

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
