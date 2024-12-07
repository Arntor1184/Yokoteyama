import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Photos from './components/Photos';
import Lessons from './components/Lessons';
import Shop from './components/Shop';
import Tournaments from './components/Tournaments';
import Contact from './components/Contact';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <Photos />
        <Lessons />
        <Shop />
        <Tournaments />
        <Contact />
      </main>
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
