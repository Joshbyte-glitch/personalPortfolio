import React from 'react';
import '../styles/about.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="section" ref={targetRef}>
      <h2 className={`section__title animate-fade-up ${isIntersecting ? 'is-visible' : ''}`}>About Me</h2>
      
      <div className={`about__container animate-fade-up ${isIntersecting ? 'is-visible' : ''}`} style={{ animationDelay: '100ms' }}>
        <div className="about__avatar">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="about__svg">
            <rect width="200" height="200" fill="var(--color-bg-elevated)" rx="16" />
            <circle cx="100" cy="80" r="40" fill="var(--color-border)" />
            <path d="M40 180 Q 100 120 160 180" fill="none" stroke="var(--color-border)" strokeWidth="16" strokeLinecap="round" />
            <rect x="75" y="65" width="10" height="10" fill="var(--color-accent)" rx="2" />
            <rect x="115" y="65" width="10" height="10" fill="var(--color-accent)" rx="2" />
            <path d="M 90 95 Q 100 105 110 95" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        
        <div className="about__content">
          <p className="about__bio">
            Josh Brandon Cabonilas, a Bachelor in Science in Information Technology in Pamantasan ng Lungsod ng Valenzuela,
            I specialize in intuitive user interfaces. 
            My work spans from low-level infrastructure to modern frontends
            </p>
          
          <div className="about__grid">
            <div className="about__stat">
              <span className="about__stat-label">Location</span>
              <span className="about__stat-value">Valenzuela, Metro Manila, Philippines</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-label">Availability</span>
              <span className="about__stat-value">Open to roles</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-label">Experience</span>
              <span className="about__stat-value">5 Years</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-label">Focus</span>
              <span className="about__stat-value">Web + Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
