

import './Navbar.css';
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Assuming you have a profile image */}
        <img src="image11.jpg" alt="Profile" className="profile-image" />
        <span className="name">Parimala Sri</span>
      </div>
      <ul className="navbar-right">
        <li><a href="#about">About</a></li>
        {/* <li><a href="#education">Education</a></li> */}
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1VBIJh-bYhx1m6JSf0jJNOLRs619RCGDU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
