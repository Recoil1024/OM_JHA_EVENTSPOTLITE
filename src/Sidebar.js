// src/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCalendarCheck, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="sidebar">
      <a 
        href="#" 
        onClick={() => setActiveSection('events')} 
        className={`sidebar-item ${activeSection === 'events' ? 'active-events' : ''}`}
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span>Events</span>
      </a>
      <a 
        href="#" 
        onClick={() => setActiveSection('calendar')} 
        className={`sidebar-item ${activeSection === 'calendar' ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faCalendarCheck} />
        <span>Calendar</span>
      </a>
      <a 
        href="#" 
        onClick={() => setActiveSection('memories')} 
        className={`sidebar-item ${activeSection === 'memories' ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faBook} />
        <span>Memories</span>
      </a>
      <a 
        href="#" 
        onClick={() => setActiveSection('addEvent')} 
        className={`sidebar-item ${activeSection === 'addEvent' ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add Event</span>
      </a>
    </div>
  );
}

export default Sidebar;

