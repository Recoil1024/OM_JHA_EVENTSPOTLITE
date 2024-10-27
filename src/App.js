// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import EventGrid from './EventGrid';
import EventModal from './EventModal';
import CalendarSection from './CalendarSection';
import MemoriesSection from './MemoriesSection';
import AddEventSection from './AddEventSection';
import './App.css';

// Initial events data
const initialEvents = [
  {
    id: 1,
    name: 'Summer Music Festival',
    date: '2023-07-15',
    location: 'Central Park, New York',
    description: 'Join us for a day of incredible music featuring top artists from around the world.',
    image: 'https://via.placeholder.com/400x300',
    activities: ['Live Performances', 'Food Stalls', 'Art Exhibitions'],
    timings: '10:00 AM - 10:00 PM'
  },
  {
    id: 2,
    name: 'Tech Conference 2023',
    date: '2023-09-05',
    location: 'Convention Center, San Francisco',
    description: 'Explore the latest in technology trends and innovations at our annual conference.',
    image: 'https://via.placeholder.com/400x300',
    activities: ['Keynote Speeches', 'Workshops', 'Networking Sessions'],
    timings: '9:00 AM - 6:00 PM daily'
  },
  {
    id: 3,
    name: 'Food & Wine Expo',
    date: '2023-10-20',
    location: 'Waterfront Hall, Chicago',
    description: 'Indulge in culinary delights and fine wines from around the globe.',
    image: 'https://via.placeholder.com/400x300',
    activities: ['Cooking Demonstrations', 'Wine Tastings', 'Gourmet Market'],
    timings: '11:00 AM - 9:00 PM daily'
  }
];

function App() {
  // State management
  const [events, setEvents] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [memories, setMemories] = useState([]);
  const [activeSection, setActiveSection] = useState('events');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedCalendarEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    const savedMemories = JSON.parse(localStorage.getItem('memories')) || [];
    const savedEvents = JSON.parse(localStorage.getItem('events')) || initialEvents;
    
    setCalendarEvents(savedCalendarEvents);
    setMemories(savedMemories);
    setEvents(savedEvents);
    setFilteredEvents(savedEvents);
  }, []);

  // Search functionality
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredEvents(events);
      return;
    }
    
    const filtered = events.filter(event => 
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  // Add new event
  const handleAddEvent = (newEvent) => {
    const eventWithId = {
      ...newEvent,
      id: Date.now()
    };
    
    const updatedEvents = [...events, eventWithId];
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setActiveSection('events');
  };

  // Calendar functionality
  const addToCalendar = (event, note = '') => {
    const newCalendarEvent = {
      ...event,
      note,
      addedAt: new Date().toISOString()
    };
    
    const updatedCalendarEvents = [...calendarEvents, newCalendarEvent];
    setCalendarEvents(updatedCalendarEvents);
    localStorage.setItem('calendarEvents', JSON.stringify(updatedCalendarEvents));
  };

  const removeFromCalendar = (eventId) => {
    const updatedCalendarEvents = calendarEvents.filter(event => event.id !== eventId);
    setCalendarEvents(updatedCalendarEvents);
    localStorage.setItem('calendarEvents', JSON.stringify(updatedCalendarEvents));
  };

  // Memories functionality
  const addMemory = (event, note, images = []) => {
    const newMemory = {
      id: Date.now(),
      event,
      note,
      images,
      date: new Date().toISOString()
    };
    
    const updatedMemories = [...memories, newMemory];
    setMemories(updatedMemories);
    localStorage.setItem('memories', JSON.stringify(updatedMemories));
  };

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x300';
  };

  // Render active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'events':
        return (
          <EventGrid 
            events={filteredEvents} 
            setSelectedEvent={setSelectedEvent}
            onImageError={handleImageError}
          />
        );
      case 'calendar':
        return (
          <CalendarSection 
            calendarEvents={calendarEvents}
            removeFromCalendar={removeFromCalendar}
          />
        );
      case 'memories':
        return (
          <MemoriesSection 
            memories={memories}
          />
        );
      case 'addEvent':
        return (
          <AddEventSection 
            addEvent={handleAddEvent}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header 
        activeSection={activeSection}
        onSearch={handleSearch}
      />
      
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main>
        {renderActiveSection()}
      </main>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          closeModal={() => setSelectedEvent(null)}
          addToCalendar={addToCalendar}
          addMemory={addMemory}
        />
      )}
    </div>
  );
}

export default App;

