import React from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

function Sidebar() {
  const activeSection = useScrollSpy();

  return (
    <div className="sidebar">
      <header>
        <h1>Jinmin Cai</h1>
        <h2>Full Stack Developer</h2>
        <p className="subtitle">I build scalable, responsive, and user-friendly web applications.</p>
      </header>

      <nav>
        <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
        <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
        <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
        <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Technical Proficiencies</a>
        <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
      </nav>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/jimcai0327" title="LinkedIn">LinkedIn</a>
        <a href="https://www.github.com/lewiskai" title="GitHub">GitHub</a>
        <a href="https://www.instagram.com/jimcai_/" title="Instagram">Instagram</a>
      </div>
    </div>
  );
}

export default Sidebar;