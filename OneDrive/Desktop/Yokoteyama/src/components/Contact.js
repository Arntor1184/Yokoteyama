import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below to get in touch.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
