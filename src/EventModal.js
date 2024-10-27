// src/EventModal.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function EventModal({ event, closeModal, addToCalendar, addMemory }) {
  const [showMemoryModal, setShowMemoryModal] = useState(false);
  const [calendarNote, setCalendarNote] = useState('');
  const [memoryNote, setMemoryNote] = useState('');
  const [memoryImages, setMemoryImages] = useState([]);

  const handleAddToCalendar = () => {
    addToCalendar(event, calendarNote);
    closeModal();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMemoryImages(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddMemory = () => {
    if (memoryNote.trim() || memoryImages.length > 0) {
      addMemory(event, memoryNote, memoryImages);
      closeModal();
    }
  };

  return (
    <div className="modal">
      {!showMemoryModal ? (
        // Main Event Modal
        <div className="modal-content">
          <span className="close-btn" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <div className="modal-header">
            <button className="btn" onClick={handleAddToCalendar}>
              Add to Calendar
            </button>
            <button className="btn" onClick={() => setShowMemoryModal(true)}>
              Add Memory
            </button>
          </div>

          <div className="event-details-box">
            <h2>{event.name}</h2>
            <p>{new Date(event.date).toLocaleDateString()} | {event.location}</p>
            <img 
              src={event.image} 
              alt={event.name} 
              className="event-detail-image" 
            />
            <p>{event.description}</p>
            <h4>Activities:</h4>
            <ul>
              {event.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
            <p>Timings: {event.timings}</p>
          </div>

          <div className="calendar-note">
            <textarea
              placeholder="Add a note for your calendar (optional)"
              value={calendarNote}
              onChange={(e) => setCalendarNote(e.target.value)}
            />
          </div>
        </div>
      ) : (
        // Memory Modal
        <div className="modal-content">
          <span className="close-btn" onClick={() => setShowMemoryModal(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <div className="memory-form">
            <h3>Add Memory</h3>
            <textarea
              placeholder="Write your memory note..."
              value={memoryNote}
              onChange={(e) => setMemoryNote(e.target.value)}
              className="memory-note"
            />
            <div className="image-upload">
              <label htmlFor="memory-images" className="upload-label">
                Upload Images
              </label>
              <input
                type="file"
                id="memory-images"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
            {memoryImages.length > 0 && (
              <div className="image-preview">
                {memoryImages.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`Preview ${index + 1}`} 
                    className="preview-image" 
                  />
                ))}
              </div>
            )}
            <div className="memory-modal-buttons">
              <button className="btn" onClick={handleAddMemory}>
                Save Memory
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowMemoryModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventModal;

