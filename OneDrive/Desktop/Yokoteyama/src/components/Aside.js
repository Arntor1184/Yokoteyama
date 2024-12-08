import React from 'react';
import './Aside.css';

const Aside = () => {
  return (
    <aside className="aside_section">
      <h2>Hello Kinakochan</h2>
      
      {/* Weather Widget */}
      <div className="weather-widget">
        <h3>Weather Forecast</h3>
        <iframe
          title="Weather Widget"
          src="https://weatherwidget.io/w/" 
          width="100%" 
          height="200" 
          frameborder="0"
        ></iframe>
      </div>
      
      {/* YouTube Video */}
      <div className="youtube-video">
        <h3>Watch This Video</h3>
        <iframe
          title="YouTube Video"
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Access Map */}
      <div className="access-map">
        <h3>Our Location</h3>
        <iframe
          title="Access Map"
          src="https://www.google.com/maps/embed?pb=..." // Use a real location link here
          width="100%" 
          height="300" 
          frameborder="0"
          style={{ border: 0 }} 
          allowFullScreen=""
          aria-hidden="false" 
          tabindex="0"
        ></iframe>
      </div>
    </aside>
  );
};

export default Aside;
