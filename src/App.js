import React from 'react';

import About from './components/About';
// import Education from './components/Education';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import  { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar />
      <div id="about" ref={aboutRef}><About /></div>
      {/* <div id="education" ref={educationRef}><Education /></div> */}
      <div id="experience" ref={experienceRef}><Experience /></div>
      <div id="projects" ref={projectsRef}><Projects /></div>
      <div id="skills" ref={skillsRef}><Skills /></div>
      <div id="contact" ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
