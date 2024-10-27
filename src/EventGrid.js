// src/EventGrid.js
import React from 'react';

function EventGrid({ events, setSelectedEvent }) {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x300';
  };

  return (
    <section id="eventSection">
      <div id="eventGrid" className="event-grid">
        {events.map(event => (
          <div 
            key={event.id} 
            className="event-card" 
            onClick={() => setSelectedEvent(event)}
          >
            <img 
              src={event.image} 
              alt={event.name} 
              className="event-image"
              onError={handleImageError}
            />
            <div className="event-details">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-date-location">
                {new Date(event.date).toLocaleDateString()} | {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventGrid;

