// src/MemoriesSection.js
import React from 'react';

function MemoriesSection({ memories }) {
  return (
    <section id="memoriesSection">
      <h2>Memories</h2>
      {memories.length === 0 ? (
        <p id="noMemoriesText">No memories still</p>
      ) : (
        <div className="memories-grid">
          {memories.map((memory, index) => (
            <div key={index} className="memory-card">
              <h3>{memory.event.name}</h3>
              <p className="memory-date">Date: {new Date(memory.date).toLocaleDateString()}</p>
              {memory.note && <p className="memory-note">{memory.note}</p>}
              {memory.images && memory.images.length > 0 && (
                <div className="memory-images-grid">
                  {memory.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="memory-image-container">
                      <img src={image} alt={`Memory ${imgIndex + 1}`} className="memory-image" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MemoriesSection;

