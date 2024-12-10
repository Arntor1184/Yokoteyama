import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPopup(true); // Show the popup message
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup when "OK" is clicked
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <label htmlFor="contact-reason">Reason for Contact:</label>
        <select id="contact-reason" name="contact-reason" required>
          <option value="tournament-entry">Tournament Entry</option>
          <option value="purchase">Purchase</option>
          <option value="lesson-signup">Lesson Sign Up</option>
          <option value="general-enquiry">General Enquiry</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Thank you for contacting us! Your message will shoot straight through to Arthur himself.</p>
            <button onClick={handleClosePopup}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;