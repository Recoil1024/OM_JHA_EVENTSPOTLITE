// src/CalendarSection.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// src/CalendarSection.js
function CalendarSection({ calendarEvents, removeFromCalendar }) {
  return (
    <section id="calendarSection">
      <h2>Calendar</h2>
      <div className="calendar-events">
        {calendarEvents.map(event => (
          <div key={event.id} className="calendar-event">
            <h3>{event.name}</h3>
            <p>{new Date(event.date).toLocaleDateString()} | {event.location}</p>
            {event.note && <p className="event-note">{event.note}</p>}
            <button 
              className="delete-btn"
              onClick={() => removeFromCalendar(event.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}


export default CalendarSection;

