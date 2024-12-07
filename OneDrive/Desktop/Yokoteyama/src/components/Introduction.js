import React from 'react';
import './Introduction.css'; // Create a CSS file for styling this component

const Introduction = () => {
  return (
    <section id="introduction">
      <h2>Welcome to the Yokoteyama Archery Club</h2>
      <div className="introduction_container">
        <div className="arthur">
          <img src="/assets/images/Arthur.jpeg" alt="Arthur Kitagawa" />
        </div>
        <div className="introduction">
          <p className="introduction_text">
            Hello there my friends and welcome to the Yokoteyama Archery Academy. My name is Arthur "Rawhide" Kitagawa, master archer...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
