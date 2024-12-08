import React from 'react';
import './Tournaments.css';

const Tournaments = () => {
  return (
    <section className="tournaments">
      <h2>Tournaments</h2>
      <p>Check out the latest tournaments and events happening in the community.</p>
      <ul>
        <li>Event 1: Tournament on [Date]</li>
        <li>Event 2: Championship on [Date]</li>
        <li>Event 3: League Event on [Date]</li>
      </ul>
    </section>
  );
};

export default Tournaments;
