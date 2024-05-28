import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Extra from './components/extra';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;
