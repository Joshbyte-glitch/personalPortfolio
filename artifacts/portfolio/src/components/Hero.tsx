import React from 'react';
import '../styles/hero.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="hero" className="hero" ref={targetRef}>
      <div className="hero__background"></div>
      <div className="hero__content">
        <h1 className={`hero__title animate-fade-up ${isIntersecting ? 'is-visible' : ''}`} style={{ animationDelay: '0ms' }}>
          I build software that <br/>
          <span className="hero__title-highlight">matters.</span>
        </h1>
        <p className={`hero__subtitle animate-fade-up ${isIntersecting ? 'is-visible' : ''}`} style={{ animationDelay: '100ms' }}>
          Full-Stack Developer · Open Source Contributor · Problem Solver
        </p>
        <p className={`hero__tagline animate-fade-up ${isIntersecting ? 'is-visible' : ''}`} style={{ animationDelay: '200ms' }}>
          Crafting resilient, high-performance systems and intuitive user experiences.
        </p>
        <div className={`hero__ctas animate-fade-up ${isIntersecting ? 'is-visible' : ''}`} style={{ animationDelay: '300ms' }}>
          <a href="#projects" className="btn btn--primary">View My Work</a>
          <a href="#contact" className="btn btn--secondary">Say Hello</a>
        </div>
      </div>
    </section>
  );
}
