import React from 'react';
import './Header.css'; // Create a CSS file for styling this component

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h1 className="header_logo">
          <img src="/assets/img/YAClogo.webp" alt="Yokoteyama Archery Club" />
        </h1>
        <nav>
          <a href="#introduction">Introduction</a>
          <a href="#photos">Photos</a>
          <a href="#lessons">Lessons</a>
          <a href="#shop">Equipment Shop</a>
          <a href="#tournaments">Tournaments</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="search-container">
          <input type="text" id="search-bar" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
