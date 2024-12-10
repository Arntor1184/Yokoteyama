import React, { useState } from 'react';
import './Header.css'; 
import logo from '../images/YAClogo.webp';

const Header = ({ navLinks }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('Please enter a search term.');
      return;
    }

    let matchFound = false;
    setNoResults(false);

    // Remove any previous highlights
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach((element) => {
      element.classList.remove('highlight');
    });

    // Search the entire page (excluding header)
    const pageContent = document.body;
    const matches = [];

    // Recursively search through all child nodes (text content)
    const searchNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const matchIndex = node.textContent.toLowerCase().indexOf(searchQuery.toLowerCase());
        if (matchIndex !== -1) {
          const span = document.createElement('span');
          span.className = 'highlight';
          const highlightedText = node.textContent.substring(matchIndex, matchIndex + searchQuery.length);
          span.textContent = highlightedText;
          const textBeforeMatch = node.textContent.substring(0, matchIndex);
          const textAfterMatch = node.textContent.substring(matchIndex + searchQuery.length);

          // Replace the text with the highlighted span
          const newNode = document.createTextNode(textBeforeMatch);
          node.parentNode.insertBefore(newNode, node);
          node.parentNode.insertBefore(span, node);
          node.parentNode.insertBefore(document.createTextNode(textAfterMatch), node);
          node.parentNode.removeChild(node);
          
          matches.push(span); // Add match to list for scrolling
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(searchNode); // Recursively search through all child nodes
      }
    };

    searchNode(pageContent); // Start searching through the page

    if (matches.length > 0) {
      matchFound = true;
      matches[0].scrollIntoView({ behavior: 'smooth' }); // Scroll to first match
    }

    if (!matchFound) {
      setNoResults(true); // If no matches found, show no results message
    }
  };

  return (
    <header className="sticky-header">
      <div className="header_container">
       
        <img src={logo} alt="Yokoteyama Archery Club" className="logo" />
       
        <nav>
          {navLinks && navLinks.length > 0 ? (
            navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
              >
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

        {noResults && <p>No results found</p>} {/* Display message if no match is found */}
      </div>
    </header>
  );
};

export default Header;
