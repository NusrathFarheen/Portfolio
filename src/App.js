import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Extras from './components/Extras';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App min-h-screen" style={{ backgroundColor: 'var(--bg-black)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Extras />
        <Contact />
      </main>
    </div>
  );
}

export default App;