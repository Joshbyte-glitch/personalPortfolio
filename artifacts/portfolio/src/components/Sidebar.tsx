import React from 'react';
import '../styles/sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__avatar">
          <img src="1x1.png" alt="Josh Brandon Cabonilas" className="sidebar__avatar-img" />
        </div>

        <h1 className="sidebar__name">Josh Brandon Cabonilas</h1>
        
        <p className="sidebar__bio">
          Bachelor in Science Information Technology in Pamantasan ng Lungsod ng Valenzuela,
        </p>

        <div className="sidebar__grid">
          <div className="sidebar__stat">
            <span className="sidebar__stat-label">Location</span>
            <span className="sidebar__stat-value">Valenzuela, Metro Manila, Philippines</span>
          </div>
          <div className="sidebar__stat">
            <span className="sidebar__stat-label">Availability</span>
            <span className="sidebar__stat-value">Open to roles</span>
          </div>
          <div className="sidebar__stat">
            <span className="sidebar__stat-label">Year</span>
            <span className="sidebar__stat-value">4th Year</span>
          </div>
          <div className="sidebar__stat">
            <span className="sidebar__stat-label">Focus</span>
            <span className="sidebar__stat-value">Web + Systems</span>
          </div>
        </div>

        <nav className="sidebar__nav">
          <a href="#hero" className="sidebar__link">Home</a>
          <a href="#skills" className="sidebar__link">Skills</a>
          <a href="#cv" className="sidebar__link">Resume</a>
          <a href="#projects" className="sidebar__link">Projects</a>
          <a href="#contact" className="sidebar__link">Contact</a>
        </nav>
      </div>
    </aside>
  );
}
