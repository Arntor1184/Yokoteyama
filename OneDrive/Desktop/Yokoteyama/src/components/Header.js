import React, { useState } from 'react';
import './Header.css'; 
import logo from '../images/YAClogo.webp';

// Header component displays the main navigation bar and branding
const Header = ({ navLinks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('Please enter a search term.');
    } else {
      console.log('Search query:', searchQuery);
    }
  };

  return (
    <header className="sticky-header">
      <div className="header_container">
        {/* Club logo */}
        <img src={logo} alt="Yokoteyama Archery Club" className="logo" />

        {/* Navigation bar */}
        <nav>
          {/* Render navigation links dynamically */}
          {navLinks && navLinks.length > 0 ? (
            navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))
          ) : (
            <p>No navigation links provided.</p>
          )}
        </nav>

        {/* Search bar */}
        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
