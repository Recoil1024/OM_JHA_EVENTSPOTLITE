// src/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header({ activeSection, onSearch }) {
  const handleSearchInput = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header>
      <nav className={activeSection !== 'events' ? 'centered-nav' : ''}>
        <div className={`logo ${activeSection !== 'events' ? 'centered-logo' : ''}`}>
          EventSpot Lite
        </div>
        {activeSection === 'events' && (
          <div className="search-bar" id="searchBarContainer">
            <input
              type="text"
              id="searchInput"
              placeholder="Search events by name or location..."
              onChange={handleSearchInput}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

