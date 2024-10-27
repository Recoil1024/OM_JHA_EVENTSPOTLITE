// src/AddEventSection.js
import React, { useState } from 'react';

function AddEventSection({ addEvent }) {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
    image: '',
    activities: '',
    timings: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({
      ...eventData,
      activities: eventData.activities.split(',').map(item => item.trim())
    });
    // Reset form
    setEventData({
      name: '',
      date: '',
      location: '',
      description: '',
      image: '',
      activities: '',
      timings: ''
    });
  };

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.id]: e.target.value });
  };

  return (
    <section id="addEventSection">
      <h2>Add/Update Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            value={eventData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={eventData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            value={eventData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="activities">Activities (comma-separated)</label>
          <input
            type="text"
            id="activities"
            value={eventData.activities}
            onChange={handleChange}
            placeholder="e.g., Live Music, Food Stalls, Art Exhibition"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timings">Timings</label>
          <input
            type="text"
            id="timings"
            value={eventData.timings}
            onChange={handleChange}
            placeholder="e.g., 10:00 AM - 6:00 PM"
            required
          />
        </div>

        <button type="submit" className="btn">Add/Update Event</button>
      </form>
    </section>
  );
}

export default AddEventSection;

